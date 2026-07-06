from sqlmodel import Session, delete
from backend.models import Profile, Skill, Project, Experience, Education, engine, create_db_and_tables

def populate_data():
    create_db_and_tables()
    with Session(engine) as session:
        # Clear existing data to prevent duplicates
        session.exec(delete(Profile))
        session.exec(delete(Skill))
        session.exec(delete(Project))
        session.exec(delete(Experience))
        session.exec(delete(Education))
        session.commit()

        # 1. Profile
        profile = Profile(
            name="Krunal Kaklotar",
            headline="Digital Technology Student | AI & ML | Intelligent Systems | Future Technologies",
            location="Wolfenbüttel, Lower Saxony, Germany",
            about="Digital Technology Student specializing in AI, ML, and Intelligent Systems at Ostfalia University of Applied Sciences.",
            profile_image="/images/profile.jpg", # Path in frontend/public
            email="krunalkaklotar2283@gmail.com",
            linkedin="https://www.linkedin.com/in/krunal-kaklotar",
            github="https://github.com/krunal-018/krunal-018"
        )
        session.add(profile)

        # 2. Education
        edu1 = Education(
            institution="Ostfalia – University of Applied Sciences",
            degree="Master of Science in Digital Technology",
            date_range="Mar 2026 – Present",
            details="Specializations: Automation & Robotics, Intelligent Systems, Artificial Intelligence, Machine Learning, Digital Technology"
        )
        edu2 = Education(
            institution="Veer Narmad South Gujarat University (VNSGU), Surat",
            degree="Bachelor of Science in Information Technology",
            date_range="Jul 2022 – Apr 2025",
            details="CGPA: 7.66"
        )
        edu3 = Education(
            institution="N.P Jikadara Uma. Shala (GSEB)",
            degree="Higher Secondary (12th Grade)",
            date_range="Completed 2022",
            details="Percentage: 89%"
        )
        edu4 = Education(
            institution="Shree Sadguru Vidhyalaya (GSEB)",
            degree="Secondary (10th Grade)",
            date_range="Completed 2020",
            details="Percentage: 72%"
        )
        session.add(edu1)
        session.add(edu2)
        session.add(edu3)
        session.add(edu4)

        # 3. Skills
        skills_data = [
            ("Python", "Programming Languages"), ("C", "Programming Languages"), ("C++", "Programming Languages"),
            ("JavaScript", "Programming Languages"), ("Kotlin", "Programming Languages"), ("PHP", "Programming Languages"),
            ("MySQL", "Database"), ("Oracle Database", "Database"), ("SQL", "Database"), ("DBMS", "Database"),
            ("PostgreSQL", "Database"), ("SQLite", "Database"), ("Artificial Intelligence", "AI/ML"),
            ("Machine Learning", "AI/ML"), ("Intelligent Systems", "AI/ML"), ("NLP", "AI/ML"),
            ("Scikit-learn", "AI/ML"), ("Hugging Face Transformers", "AI/ML"), ("FastAPI", "Web"),
            ("Flask", "Web"), ("React", "Web"), ("TypeScript", "Web"), ("Tailwind CSS", "Web")
        ]
        for name, cat in skills_data:
            session.add(Skill(name=name, category=cat))

        # 4. Projects
        p1 = Project(
            title="IoT Data Validation & Forecasting System",
            description="Currently developing an IoT-based data validation and forecasting system focused on validating and processing real-time structured data efficiently.",
            association="Ostfalia - University of Applied Sciences",
            features="Email, phone number, password, timestamp, and CSV data validation with automated rule handling, validation logging, forecasting, notifications, and SQLite data storage. Working on features such as time-series validation, forecasting models, notification systems, web-based validation, and analytics dashboards for IoT data processing and monitoring.",
            technologies="Python, SQLite, CLI-based Architecture",
            date_range="May 2026 – Present"
        )
        p2 = Project(
            title="Niramaya – Health AI (Symptoms Checker)",
            description="Developed an AI-powered healthcare web application that helps users analyze symptoms, receive disease predictions, and access personalized health guidance in real time.",
            association="Veer Narmad South Gujarat University (VNSGU), Surat",
            features="Integrates machine learning and NLP models including Logistic Regression, BioGPT, and Gemini to provide symptom-based disease prediction, preventive recommendations, and AI-driven health query responses. Features include family profile management, chat history tracking, research paper integration, and interactive conversational responses.",
            technologies="Python, Flask, PostgreSQL, HTML, CSS, JavaScript, Scikit-learn, Hugging Face Transformers",
            date_range="May 2025 – Jul 2025"
        )
        p3 = Project(
            title="RORO Ferry Service Management System",
            description="Built a web-based RORO Ferry Service Management System with comprehensive management and booking functionalities.",
            association="Veer Narmad South Gujarat University (VNSGU), Surat",
            features="Online ticket booking, trip scheduling, seat management, payment processing, and admin dashboard functionalities.",
            technologies="PHP, MySQL, JavaScript, AJAX, Bootstrap",
            date_range="Jan 2025 – Apr 2025"
        )
        p4 = Project(
            title="AI-Powered Live Directory Data Engine",
            description="AI-powered live data engine developed during a hackathon to transform static business directory listings into a continuously updated and intelligent real-time system.",
            association="Hackathon Project",
            features="Monitors German business listings, detects field-level changes, validates structured data, and automatically updates records using confidence scoring and human review workflows. Implemented live polling, ETag-based change detection, AI-assisted extraction, automated validation, and review pipelines.",
            technologies="Python, FastAPI, React, TypeScript, Supabase, Redis, Celery",
            date_range="Hackathon Project"
        )
        session.add(p1)
        session.add(p2)
        session.add(p3)
        session.add(p4)

        session.commit()
        print("Database populated successfully with detailed project information!")

if __name__ == "__main__":
    populate_data()
