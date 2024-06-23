import logging
from typing import Optional, Any, Dict

from fastapi import Depends, Request, Response
from fastapi_users import BaseUserManager, IntegerIDMixin

from api.auth.db import User, get_user_db
from config import config

logger = logging.getLogger(__name__)


class UserManager(IntegerIDMixin, BaseUserManager[User, int]):
    reset_password_token_secret = config.RESET_PASSWORD_TOKEN_SECRET
    reset_password_token_lifetime_seconds = config.RESET_PASSWORD_TOKEN_LIFETIME_SECONDS

    verification_token_secret = config.VERIFICATION_TOKEN_SECRET
    verification_token_lifetime_seconds = config.VERIFICATION_TOKEN_LIFETIME_SECONDS

    async def on_after_register(self, user: User, request: Optional[Request] = None):
        logger.info(f"User {user.id} has registered!")

    async def on_after_update(
        self,
        user: User,
        update_dict: Dict[str, Any],
        request: Optional[Request] = None,
    ):
        logger.info(f"User {user.id} has been updated with {update_dict}.")

    async def on_after_login(
        self,
        user: User,
        request: Optional[Request] = None,
        response: Optional[Response] = None,
    ):
        logger.info(f"User {user.id} logged in.")

    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        logger.info(
            f"Verification requested for user {user.id}. Verification token: {token}"
        )

    async def on_after_verify(self, user: User, request: Optional[Request] = None):
        logger.info(f"User {user.id} has been verified")

    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        logger.info(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_reset_password(
        self, user: User, request: Optional[Request] = None
    ):
        logger.info(f"User {user.id} has reset their password.")

    async def on_before_delete(self, user: User, request: Optional[Request] = None):
        logger.info(f"User {user.id} is going to be deleted")

    async def on_after_delete(self, user: User, request: Optional[Request] = None):
        logger.info(f"User {user.id} is successfully deleted")


async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
