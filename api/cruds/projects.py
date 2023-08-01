from models.projects import Project
from db.database import engine
from sqlmodel import Session, select


def add_project(project: Project):
    with Session(engine) as session:
        session.add(project)
        session.commit()


def list_all_projects():
    with Session(engine) as session:
        statement = select(Project)
        return session.exec(statement).all()


def find_project(project_id: int):
    with Session(engine) as session:
        statement = select(Project).where(Project.id == project_id)
        return session.exec(statement).first()


def delete_project(project_id: int):
    with Session(engine) as session:
        statement = select(Project).where(Project.id == project_id)
        project = session.exec(statement).first()
        session.delete(project)
        session.commit()
        return project
