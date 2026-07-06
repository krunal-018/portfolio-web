from typing import List, Optional
from sqlmodel import Field, SQLModel, create_engine, Session, select

class Profile(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    headline: str
    location: str
    about: str
    profile_image: Optional[str] = None
    email: Optional[str] = None
    linkedin: Optional[str] = None
    github: Optional[str] = None

class Skill(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    category: str  # e.g., "Programming Languages", "AI/ML"

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    association: Optional[str] = None
    features: str  # Stored as a string (can be JSON or newline-separated)
    technologies: str
    date_range: str
    link: Optional[str] = None

class Experience(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    company: str
    role: str
    date_range: str
    description: Optional[str] = None

class Education(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    institution: str
    degree: str
    date_range: str
    details: Optional[str] = None

class ContactMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    message: str
    timestamp: Optional[str] = None # We can set this in the route

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=False)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
