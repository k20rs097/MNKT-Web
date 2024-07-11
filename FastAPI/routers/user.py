from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import database
import models
import schemas.user as schema

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

@router.post("/", response_model=schema.User)
def create_user(user: schema.UserCreate, db: Session = Depends(database.get_db)):
    db_user = schema.User(user_name=user.user_name, hashed_password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user