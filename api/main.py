from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from endpoints import auth

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    auth.router,
    prefix='/auth',
    tags=['Users authentication']
)


@app.get("/", tags=["Home"])
async def root():
    return {"message": "Welcome to my Portfolio API"}
