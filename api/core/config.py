import os
import secrets
from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str
    SECRET_KEY: str = secrets.token_urlsafe(32)

    DATABASE_USERNAME: str = os.getenv('DB_USERNAME', None)
    DATABASE_PASSWORD: str = os.getenv('DB_PASSWORD', None)
    DATABASE_SERVER: str = os.getenv('DB_SERVER', None)
    DATABASE_NAME: str = os.getenv('DB_NAME', 'database.db')
    DATABASE_DRIVER: str = os.getenv('DB_DRIVER', None)

    # Todo: set token expiration time
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    def get_db_uri(self):
        url = ""
        if self.DATABASE_DRIVER:
            url += self.DATABASE_DRIVER + "://"
        else:
            url += "sqlite:///"

        if self.DATABASE_USERNAME:
            url += self.DATABASE_USERNAME

        if self.DATABASE_PASSWORD:
            url += self.DATABASE_PASSWORD

        if self.DATABASE_SERVER:
            url += "@" + self.DATABASE_SERVER

        url += self.DATABASE_NAME
        return url

settings = Settings()