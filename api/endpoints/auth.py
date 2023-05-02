from fastapi import APIRouter, status, HTTPException, Body
from fastapi.exceptions import HTTPException
from sqlalchemy.exc import IntegrityError
from core.config import settings
from core.security import *
from cruds.auth_crud import *
from models.auth import User

router = APIRouter()


@router.post("/login", response_model=Token, summary="User login")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    """Authenticate with username and password then get authorization token"""
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post(
    '/register',
    status_code=status.HTTP_201_CREATED,
    response_model=User,
    response_model_exclude={"password", "id"},
    summary='User registry'
)
async def register(user: User = Body()):
    """Register new users with all the example fields"""
    if not user:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE)
    user.is_admin = False
    user.password = get_password_hash(user.password)
    with Session(engine) as session:
        try:
            session.add(user)
            session.commit()
        except IntegrityError:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already exists"
            )
        session.refresh(user)
    user = find_user(username=user.username)
    print(user)
    return user


@router.get("/users/me/", response_model=User, response_model_exclude={"password"}, summary="Read user")
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    """Get current user information"""
    return current_user
