from fastapi_users.authentication import AuthenticationBackend

from api.auth.backend.strategy import get_jwt_strategy
from api.auth.backend.transport import bearer_transport


auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)
