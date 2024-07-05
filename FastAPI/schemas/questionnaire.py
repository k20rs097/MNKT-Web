from pydantic import BaseModel

class QuestionnaireBase(BaseModel):
    id: int
    questionnaire_id: int
    movie_id: str
    priority: int
    question_sentence: str
    choice_1: str
    choice_2: str
    choice_3: str
    choice_4: str
    answer_type: int