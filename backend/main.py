from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from typing import List
try:
    from models import Profile, Skill, Project, Experience, Education, ContactMessage, engine, create_db_and_tables
except ImportError:
    from backend.models import Profile, Skill, Project, Experience, Education, ContactMessage, engine, create_db_and_tables
from datetime import datetime

from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the database and tables
    create_db_and_tables()
    yield
    # Clean up (if needed)

app = FastAPI(title="Krunal Kaklotar Portfolio API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; in production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/api/profile", response_model=Profile)
def get_profile(session: Session = Depends(get_session)):
    profile = session.exec(select(Profile)).first()
    return profile

@app.get("/api/skills", response_model=List[Skill])
def get_skills(session: Session = Depends(get_session)):
    skills = session.exec(select(Skill)).all()
    return skills

@app.get("/api/projects", response_model=List[Project])
def get_projects(session: Session = Depends(get_session)):
    projects = session.exec(select(Project)).all()
    return projects

@app.get("/api/experience", response_model=List[Experience])
def get_experience(session: Session = Depends(get_session)):
    experience = session.exec(select(Experience)).all()
    return experience

@app.get("/api/education", response_model=List[Education])
def get_education(session: Session = Depends(get_session)):
    education = session.exec(select(Education)).all()
    return education

@app.post("/api/contact")
def post_contact(message: ContactMessage, session: Session = Depends(get_session)):
    message.timestamp = datetime.now().isoformat()
    session.add(message)
    session.commit()
    session.refresh(message)
    return {"status": "success", "message_id": message.id}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
