from sqlmodel import SQLModel, create_engine, Session
from models import auth, blog, projects


eng = 'db.db'

sqlite_url = f'sqlite:///{eng}'
engine = create_engine(sqlite_url, echo=True)

def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()
