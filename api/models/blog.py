from sqlmodel import SQLModel, Field
from datetime import date
from typing import Optional, List


class Post(SQLModel, table=True):
    id: int = Field(primary_key=True)
    user_id: int = Field(nullable=False, foreign_key='user.id')
    title: str = Field(nullable=False)
    content: str = Field()
    date_created: date = Field(default=date.today())
    date_modified: date = Field(default=date.today())
    tags: Optional[List[str]] = Field()
