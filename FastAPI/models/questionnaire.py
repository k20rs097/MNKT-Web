from sqlalchemy import Column, Integer, String

from database import Base


class Questionnaires(Base):
    __tablename__ = 'questionnaires'
    
    id = Column(Integer, primary_key=True, index=True)
    questionnaire_id = Column(Integer, nullable=False)
    movie_id = Column(String(255))
    priority = Column(Integer)
    question_sentence = Column(String(255))
    choice_1 = Column(String(255))
    choice_2 = Column(String(255))
    choice_3 = Column(String(255))
    choice_4 = Column(String(255))
    answer_type = Column(Integer)