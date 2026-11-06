# 🌐 Krunal Kaklotar - Portfolio Website

### [Visit my live portfolio ↗](https://krunal-018.vercel.app/)

Welcome to the repository of my personal portfolio website, designed to showcase my academic projects, skills, education, professional experience, and technical achievements. 

This project is built using a modern full-stack architecture with a **FastAPI** backend and a **Next.js** (React) frontend.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                 Frontend (Next.js & React)                 │
│  ├─ Profile Info   ├─ Skills List   ├─ Projects View        │
│  ├─ Interactive Contact Form                                │
└──────────────────────┬──────────────────────────────────────┘
                       │ (JSON API Calls via HTTP)
┌──────────────────────▼──────────────────────────────────────┐
│                  FastAPI Backend (Python)                   │
│  ├─ Profile API    ├─ Skills API    ├─ Projects API         │
│  ├─ Contact Submission Handler                              │
└──────────────────────┬──────────────────────────────────────┘
                       │ (SQLModel ORM)
┌──────────────────────▼──────────────────────────────────────┐
│                      SQLite Database                        │
│  ├─ Profiles   ├─ Skills   ├─ Projects   ├─ Messages        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (React 18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS
- **Linting & Formatting**: ESLint

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.9+)
- **ORM & Database Modeling**: [SQLModel](https://sqlmodel.tiangolo.com/) (based on SQLAlchemy & Pydantic)
- **Database**: SQLite (local storage)
- **Server**: [Uvicorn](https://www.uvicorn.org/)

---

## 🚀 Local Setup & Development

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (v16.0+)
- **Python** (v3.9+)

---

### 2. Backend Setup & Run

1. Navigate to the root directory and create a Python virtual environment:
   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:
   * **Windows (PowerShell)**:
     ```powershell
     .\venv\Scripts\Activate.ps1
     ```
   * **macOS/Linux**:
     ```bash
     source venv/bin/activate
     ```

3. Install the backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Seed the database with portfolio information:
   ```bash
   python seed.py
   ```

5. Run the FastAPI development server:
   ```bash
   uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
   ```
   * *Swagger/OpenAPI docs are available at:* `http://127.0.0.1:8000/docs`

---

### 3. Frontend Setup & Run

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node packages:
   ```bash
   npm install
   ```

3. Run the Next.js development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the portfolio.

---

## 🔌 API Endpoints Reference

The backend exposes the following API routes:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/profile` | Returns the developer's profile details. |
| **GET** | `/api/skills` | Returns a list of technical skills categorized by type. |
| **GET** | `/api/projects` | Returns all featured projects. |
| **GET** | `/api/experience` | Returns career history & professional experience. |
| **GET** | `/api/education` | Returns educational history. |
| **POST** | `/api/contact` | Receives and stores visitor messages submitted through the contact form. |

---

## ☁️ Deployment

This project is configured for easy deployment on platforms like **Render** using the provided [render.yaml](file:///C:/Users/kruna/portfolio-web/render.yaml) file:

- **Build Command**: `pip install -r requirements.txt && python seed.py`
- **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`