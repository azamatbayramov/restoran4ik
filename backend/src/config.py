from os import getenv


class Config:
    MONGODB_URL = "mongodb://mongodb:27017/"

    APP_ROOT_PATH = "/api"
    APP_TITLE = "Restoran4ik"
    APP_DESCRIPTION = "Restaurant Management System"
    APP_VERSION = "0.1.0"

    LOGGING_LEVEL = "INFO"
    LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

    TOKEN_URL = "auth/login"

    JWT_SECRET = getenv("JWT_SECRET")
    JWT_LIFETIME_SECONDS = 60 * 60 * 24

    RESET_PASSWORD_TOKEN_SECRET = getenv("RESET_PASSWORD_TOKEN_SECRET")
    RESET_PASSWORD_TOKEN_LIFETIME_SECONDS = 60 * 60

    VERIFICATION_TOKEN_SECRET = getenv("VERIFICATION_TOKEN_SECRET")
    VERIFICATION_TOKEN_LIFETIME_SECONDS = 60 * 60


config = Config()
