from fastapi import APIRouter, status, HTTPException, Body
from handlers.auth_handler import AuthHandler
from models.auth import User, UserLogin
from cruds.auth_crud import *

router = APIRouter()
handler = AuthHandler()


@router.post(
    '/login',
    status_code=status.HTTP_202_ACCEPTED,
    summary='Login function'
)
async def login(login_user: UserLogin = Body()):
    user = find_user(username=login_user.username)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found')

    if handler.verify_password(login_user.password, user.password):
        return handler.encode_token(user.id)


@router.post(
    '/register',
    status_code=status.HTTP_201_CREATED,
    summary='User register function'
)
async def register(user: User = Body()):
    if not user:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE)
    with Session(engine) as session:
        # Todo: Add validation of unique username
        users = select_all_users()
        if any(user.username == x.username for x in users):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Username is taken')
        session.add(user)
        session.commit()
    return user
