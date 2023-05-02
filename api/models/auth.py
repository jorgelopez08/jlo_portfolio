from sqlmodel import SQLModel, Field
from pydantic import EmailStr
from typing import Optional


class User(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    username: str = Field(unique=True)
    first_name: str = Field(nullable=False)
    last_name: str = Field(nullable=False)
    email: EmailStr = Field(nullable=False)
    password: str = Field(min_length=8)
    is_admin: bool = Field(default=False, nullable=True)
    is_active: bool = Field(default=True, nullable=True)

    class Config:
        schema_extra = {
            "example": {
                "username": "Foo",
                "first_name": "John",
                "last_name": "Doe",
                "email": "test@email.com",
                "password": "supersecurepassword"
            }
        }
