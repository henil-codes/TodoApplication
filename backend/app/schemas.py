from pydantic import BaseModel

class CreateTodo(BaseModel):
    title: str
    description: str | None = None

class updateTodo(BaseModel):
    title: str | None = None
    description: str | None = None
    is_done: bool | None = None

class TodoResponse(BaseModel):
    id: int
    title: str
    description: str | None = None
    is_done: bool