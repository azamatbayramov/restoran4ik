from fastapi_users.authentication import JWTStrategy

from config import config


def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(
        secret=config.JWT_SECRET, lifetime_seconds=config.JWT_LIFETIME_SECONDS
    )
