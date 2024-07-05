from pydantic import BaseModel

class QuestionnaireBase(BaseModel):
    id: int
    user_id: int
    hashed_password: str