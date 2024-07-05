from sqlalchemy import Column, Integer, String

from connect_db import Base


class Passcode(Base):
    __tablename__ = 'passcode'
    id = Column(Integer, primary_key=True, index=True)
    passcode = Column(Integer, nullable=False)
    questionnaire_id = Column(Integer, nullable=False)
