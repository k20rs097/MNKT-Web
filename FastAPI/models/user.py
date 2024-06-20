from connect_db import Base
from sqlalchemy import Column, Integer, String

import pandas as pd

class Users(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(32))
    email = Column(String(32))
    password = Column(String)
