from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


from env import config

user = config.DB_USER
password = config.PASSWORD
host = config.HOST
db_name = config.DATABASE

# MySQLに接続するためのフォーマット文字列
URL_DATABASE = f'mysql+mysqlconnector://{user}:{password}@{host}/{db_name}'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine)

Base = declarative_base()