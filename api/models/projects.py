from sqlmodel import SQLModel, Field
from datetime import date


class Project(SQLModel, table=True):
    id: int = Field(primary_key=True, default=None)
    title: str = Field(default="")
    description: str = Field(default="")
    date_created: date = Field(default=date.today())
    date_added: date = Field(default=date.today())
    link: str = Field()
