from models.auth import User
from db.database import engine
from sqlmodel import Session, select


def find_user(user_id: int = None, user_email: str = None, username: str = None):
    with Session(engine) as session:
        if user_id:
            statement = select(User).where(User.id == user_id)
        if user_email:
            statement = select(User).where(User.email == user_email)
        if username:
            statement = select(User).where(User.username == username)
        return session.exec(statement).first()


def delete_user(user_id: int):
    with Session(engine) as session:
        statement = select(User).where(User.id == user_id)
        user = session.exec(statement).first()
        session.delete(user)
        session.commit()
        return user


def select_all_users():
    with Session(engine) as session:
        statement = select(User)
        users = session.exec(statement).all()
        return users
