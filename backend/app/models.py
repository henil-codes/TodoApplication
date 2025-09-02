from sqlalchemy import Column, Integer, Boolean, String
from .database import Base

class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    description = Column(String(255), nullable=True)
    is_done = Column(Boolean, default=False)