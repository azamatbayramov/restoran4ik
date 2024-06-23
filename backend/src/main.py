from contextlib import asynccontextmanager
from logging import getLogger, basicConfig

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator

from api.auth.backend import auth_backend
from api.auth.schemas import UserRead, UserCreate
from api.auth.service import fastapi_users
from config import config
from core.database.db import initialize_database

ROUTERS = []

logger = getLogger()
basicConfig(level=config.LOGGING_LEVEL, format=config.LOGGING_FORMAT)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Database initialization")
    await initialize_database()

    logger.info("Prometheus instrumentator initialization")
    instrumentator.expose(app)

    logger.info("Application startup")

    yield

    logger.info("Application shutdown")


app = FastAPI(
    lifespan=lifespan,
    root_path=config.APP_ROOT_PATH,
    title=config.APP_TITLE,
    description=config.APP_DESCRIPTION,
    version=config.APP_VERSION,
)

instrumentator = Instrumentator().instrument(app)

for router in ROUTERS:
    app.include_router(router)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
