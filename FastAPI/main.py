from fastapi import FastAPI
from app.routers import passcode, questionnaire, user

app = FastAPI()

app.include_router(passcode.router)
app.include_router(questionnaire.router)
app.include_router(user.router)

@app.get("/")
def read_root():
    return {"It": "Works!"}

# from enum import Enum
# from typing import Annotated, List

# import models.questionnaire as questionnaire
# from routers import passcode, questionnaire, user
# from connect_db import SessionLocal, engine
# from fastapi import Depends, FastAPI, HTTPException, status
# from pydantic import BaseModel
# from sqlalchemy.orm import Session
# from starlette.middleware.cors import CORSMiddleware

# app = FastAPI()
# questionnaire.Base.metadata.create_all(bind=engine)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=['*'],
#     allow_credentials=True,
#     allow_methods=['*'],
#     allow_headers=['*']
# )

# class QuestionnaireBase(BaseModel):
#     id: int
#     questionnaire_id: int
#     movie_id: str
#     priority: int
#     question_sentence: str
#     choice_1: str
#     choice_2: str
#     choice_3: str
#     choice_4: str
#     answer_type: int

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# db_dependency = Annotated[Session, Depends(get_db)]

# @app.get("/questionnaires/", response_model=List[QuestionnaireBase], status_code=status.HTTP_200_OK)
# def read_all_questionnaires(db: db_dependency):
#     return db.query(questionnaire.Questionnaires).all()

# @app.get("/questionnaires/{questionnaire_id}", status_code=status.HTTP_200_OK)
# def read_questionnaires(questionnaire_id: int, db: db_dependency):
#     questionnaire = search_by_questionnaire_id(questionnaire_id, db)
#     if questionnaire is None:
#         raise HTTPException(status_code=404, detail=Status.NOT_FOUND)
#     return questionnaire

# @app.post("/questionnaires/", status_code=status.HTTP_201_CREATED)
# def create_questionnaires(questionnaire: QuestionnaireBase, db: db_dependency):
#     db_questionnaire = questionnaire.Questionnaires(**questionnaire.dict())
#     db.add(db_questionnaire)
#     db.commit()
#     return db_questionnaire

# @app.post("/questionnaires/{questionnaire_id}", status_code=status.HTTP_201_CREATED)
# def update_questionnaires(questionnaire_id: int, questionnaire: QuestionnaireBase, db: db_dependency):
#     existing_questionnaire = search_by_questionnaire_id(questionnaire_id, db)
#     if existing_questionnaire is None:
#         raise HTTPException(status_code=404, detail='Questionnaire not found')

#     for key, value in questionnaire.dict().items():
#         setattr(existing_questionnaire, key, value)

#     db.commit()
#     return existing_questionnaire

# @app.delete("/questionnaires/{questionnaire_id}", status_code=status.HTTP_204_NO_CONTENT)
# def delete_questionnaires(questionnaire_id: int, db: db_dependency):
#     statements = [
#         "SET @i = 0",
#         "UPDATE questionnaires SET id = (@i := @i +1)",
#         "ALTER TABLE questionnaires AUTO_INCREMENT = 1"
#     ]
#     questionnaire = search_by_questionnaire_id(questionnaire_id, db)
#     if questionnaire is None:
#         raise HTTPException(status_code=404, detail=Status.NOT_FOUND)
#     db.delete(questionnaire)
#     db.commit()
#     try:
#         with engine.connect() as connection:
#             for statement in statements:
#                 connection.execute(statement)
#     except Exception as e:
#         print(e)
#         raise HTTPException(status_code=500, detail='Internal Server Error')

# def search_by_questionnaire_id(questionnaire_id: int, db: db_dependency):
#     result = db.query(questionnaire.Questionnaires).filter(questionnaire.Questionnaires.id == questionnaire_id).first()
#     return result
