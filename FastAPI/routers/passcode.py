from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import database
import models
import schemas.questionnaire as schema

router = APIRouter(
    prefix="/passcode",
    tags=["passcode"]
)

@router.get("/pass")