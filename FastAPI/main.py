from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from connect_db import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

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

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/questionnaires/{questionnaire_id}", status_code=status.HTTP_200_OK)
def read_questionnaires(questionnaire_id: int, db: db_dependency):
    questionnaire = db.query(models.Questionnaires).filter(models.Questionnaires.id == questionnaire_id).first()
    if questionnaire is None:
        raise HTTPException(status_code=404, detail='Questionnaire not found')
    return questionnaire

@app.post("/questionnaires/", status_code=status.HTTP_201_CREATED)
def create_questionnaires(questionnaire: QuestionnaireBase, db: db_dependency):
    db_questionnaire = models.Questionnaires(**questionnaire.dict())
    db.add(db_questionnaire)
    db.commit()