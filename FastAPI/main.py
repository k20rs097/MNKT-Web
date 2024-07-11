# app = FastAPI()
from enum import Enum
from typing import Annotated, List

from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware

import models.questionnaire as questionnaire
from database import SessionLocal, engine
from routers import passcode, questionnaire, user

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# app.include_router(passcode.router)
app.include_router(questionnaire.router)
# app.include_router(user.router)