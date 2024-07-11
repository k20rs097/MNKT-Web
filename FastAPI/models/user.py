from connect_db import Base
from sqlalchemy import Column, Integer, String


class Users(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String(32))
    hashed_password = Column(String)
