from app.database import engine, Base
from app.models import Todo

def create_tables():
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    print("Tables have created!!")

if __name__ == "__main__":
    create_tables