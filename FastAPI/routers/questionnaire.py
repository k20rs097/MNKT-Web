from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, models, database
import schemas.questionnaire as questionnaire


@app.get("/questionnaires/", response_model=List[QuestionnaireBase], status_code=status.HTTP_200_OK)
def read_all_questionnaires(db: db_dependency):
    return db.query(questionnaire.Questionnaires).all()

@app.get("/questionnaires/{questionnaire_id}", status_code=status.HTTP_200_OK)
def read_questionnaires(questionnaire_id: int, db: db_dependency):
    questionnaire = search_by_questionnaire_id(questionnaire_id, db)
    if questionnaire is None:
        raise HTTPException(status_code=404, detail=Status.NOT_FOUND)
    return questionnaire

@app.post("/questionnaires/", status_code=status.HTTP_201_CREATED)
def create_questionnaires(questionnaire: QuestionnaireBase, db: db_dependency):
    db_questionnaire = questionnaire.Questionnaires(**questionnaire.dict())
    db.add(db_questionnaire)
    db.commit()
    return db_questionnaire

@app.post("/questionnaires/{questionnaire_id}", status_code=status.HTTP_201_CREATED)
def update_questionnaires(questionnaire_id: int, questionnaire: QuestionnaireBase, db: db_dependency):
    existing_questionnaire = search_by_questionnaire_id(questionnaire_id, db)
    if existing_questionnaire is None:
        raise HTTPException(status_code=404, detail='Questionnaire not found')

    for key, value in questionnaire.dict().items():
        setattr(existing_questionnaire, key, value)

    db.commit()
    return existing_questionnaire

@app.delete("/questionnaires/{questionnaire_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_questionnaires(questionnaire_id: int, db: db_dependency):
    statements = [
        "SET @i = 0",
        "UPDATE questionnaires SET id = (@i := @i +1)",
        "ALTER TABLE questionnaires AUTO_INCREMENT = 1"
    ]
    questionnaire = search_by_questionnaire_id(questionnaire_id, db)
    if questionnaire is None:
        raise HTTPException(status_code=404, detail=Status.NOT_FOUND)
    db.delete(questionnaire)
    db.commit()
    try:
        with engine.connect() as connection:
            for statement in statements:
                connection.execute(statement)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail='Internal Server Error')

def search_by_questionnaire_id(questionnaire_id: int, db: db_dependency):
    result = db.query(questionnaire.Questionnaires).filter(questionnaire.Questionnaires.id == questionnaire_id).first()
    return result
