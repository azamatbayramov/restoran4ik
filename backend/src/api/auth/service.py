from fastapi_users import FastAPIUsers

from api.auth.backend import auth_backend
from api.auth.db import User
from api.auth.manager import get_user_manager

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)
