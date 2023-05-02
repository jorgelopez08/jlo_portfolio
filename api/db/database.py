from sqlmodel import SQLModel, create_engine, Session
from core.config import settings

DB_URI = settings.get_db_uri()

engine = create_engine(DB_URI)


def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()
