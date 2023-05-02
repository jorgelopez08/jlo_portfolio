from models.blog import Post
from db.database import engine
from sqlmodel import Session, select


def add_post(post: Post):
    with Session(engine) as session:
        session.add(post)
        session.commit()
        return post


def list_al_posts():
    with Session(engine) as session:
        statement = select(Post)
        return session.exec(statement).all()


def find_post(post_id: int):
    with Session(engine) as session:
        statement = select(Post).where(Post.id == post_id)
        return session.exec(statement).first()
