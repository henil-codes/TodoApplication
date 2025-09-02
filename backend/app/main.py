from fastapi import FastAPI
from .routers import todos

app = FastAPI()

app.include_router(todos.router, prefix="/api/v1/todos", tags=["todos"])