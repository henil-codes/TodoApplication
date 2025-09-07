from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Todo
from ..schemas import TodoResponse, CreateTodo, updateTodo

router = APIRouter()

# Create Todo
@router.post("/", response_model=TodoResponse, status_code=status.HTTP_201_CREATED)
@router.post("", response_model=TodoResponse, status_code=status.HTTP_201_CREATED)
async def create_todo(todo: CreateTodo, db: Session = Depends(get_db)):
    db_todo = Todo(**todo.dict())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)

    return db_todo


# Read all Todos
@router.get("/", response_model=list[TodoResponse])
@router.get("", response_model=list[TodoResponse])
async def read_todos(db: Session = Depends(get_db)):
    todos = db.query(Todo).all()

    return todos


# Read a specific Todo
@router.get("/{id}", response_model=TodoResponse)
async def read_todo(id: int, db: Session = Depends(get_db)):
    db_todo = db.query(Todo).filter(Todo.id == id).first()

    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found : (")
    
    return db_todo


# Update Todo
@router.put("/{id}", response_model=TodoResponse)
async def update_todo(todo: updateTodo, id: int, db: Session = Depends(get_db)):
    db_todo = db.query(Todo).filter(Todo.id == id).first()
    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found : (")
    
    for key, value in todo.dict(exclude_unset=True).items():
        setattr(db_todo, key, value)

    db.commit()
    db.refresh(db_todo)

    return db_todo


# Delete Todo
@router.delete("/{id}")
async def delete_todo(id: int, db: Session = Depends(get_db)):
    db_todo = db.query(Todo).filter(Todo.id == id).first()
    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found : (")
    
    db.delete(db_todo)
    db.commit()

    return {"message": "Deleted successfully!!!"}