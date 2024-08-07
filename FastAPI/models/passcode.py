from connect_db import Base
from sqlalchemy import Column, ForeignKey, Integer, String


class Passcode(Base):
    __tablename__ = 'passcode'
    
    id = Column(Integer, primary_key=True, index=True)
    passcode = Column(Integer, nullable=False)
    questionnaire_id = Column(Integer, ForeignKey("questionnaire.id"))
