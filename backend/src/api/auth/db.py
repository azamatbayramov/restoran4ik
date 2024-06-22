from fastapi_users_db_beanie import BeanieUserDatabase

from core.database.models.user import User


async def get_user_db():
    yield BeanieUserDatabase(User)
