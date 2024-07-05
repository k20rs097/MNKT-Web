from pydantic import BaseModel

class Passcode(Base):
    id: int
    passcode: int
    questionnaire_id: int