from pydantic import BaseModel

class UserBase(BaseModel):
    user_name: str
    password: str
    
class UserCreate(UserBase):
    pass

class User(UserCreate):
    id: int
    
    class Config:
        orm_mode = True