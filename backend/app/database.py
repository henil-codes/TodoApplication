from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from .config import DATABASE_URL

# Created engine
engine = create_engine(DATABASE_URL)

# Session object 
sessonLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = sessonLocal()  # Gets dependencies from sessionmaker
    try:
        yield db
    finally:
        db.close()

