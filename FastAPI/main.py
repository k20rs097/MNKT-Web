from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins
)

class QuestionnaireBase(BaseModel):
    questionnaire_id: int
    movie_id: str
    priority: int
    question_sentence: str
    choice_1: str
    choice_2: str
    choice_3: str
    choice_4: str
    answer_type: int

class QuestionnaireModel(QuestionnaireBase):
    id: int

    class Config:
        orm_mode = True

def get_db():
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

@app.post("/questionnaires/", response_model=QuestionnaireModel)
async def create_questionnaires(questionnaire: QuestionnaireBase, db: db_dependency):
    db_questionnaire = models.Questionnaire(**questionnaire.dict())
    db.add(db_questionnaire)
    db.commit()
    db.refresh(db_questionnaire)
    return db_questionnaire

# @app.post("/questionnaires", response_model=List[QuestionnaireModel])
# async def read_questionnaires(db: db_dependency, skip: int = 0, limit: int = 100):
#     questionnaires = db.query(models.Questionnaire).offset(skip).limit(limit).all()
#     return questionnaires