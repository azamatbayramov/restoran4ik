from fastapi_users.authentication import BearerTransport

from config import config


bearer_transport = BearerTransport(tokenUrl=config.TOKEN_URL)
