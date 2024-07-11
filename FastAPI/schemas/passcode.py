from pydantic import BaseModel


class PasscodeBase(BaseModel):
    passcode: int
    
class PasscodeCreate(PasscodeBase):
    pass

class Passcode(PasscodeBase):
    id: int
    questionnaire_id: int
    
    class Config:
        orm_mode = True