from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient

from config import config
from core.database.models import MODELS


async def initialize_database():
    client = AsyncIOMotorClient(config.MONGODB_URL)
    await init_beanie(database=client.OTMS, document_models=MODELS)
