from pydantic import BaseModel
from typing import Optional  # typing モジュールの Optional をインポート

class QuestionnaireBase(BaseModel):
    questionnaire_id: int
    movie_id: str
    priority: int
    question_sentence: str
    choice_1: str
    choice_2: str
    choice_3: str
    choice_4: str
    answer_type: Optional[int]  # answer_type フィールドの型を int または Optional[int] に指定

class QuestionnaireCreate(QuestionnaireBase):
    pass  # QuestionnaireBase モデルを継承するだけであれば、何も追加する必要はありません

class Questionnaire(QuestionnaireBase):
    id: int

    class Config:
        orm_mode = True
