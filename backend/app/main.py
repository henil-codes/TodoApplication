from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import todos

app = FastAPI()

# add the CORS middleware 
origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_methods=["*"], allow_headers=["*"])

app.include_router(todos.router, prefix="/api/v1/todos", tags=["todos"])