# 🌍  AI – Agentic Multi-Agent Travel Planner

An Agentic AI-powered travel planning application that generates personalized travel itineraries, destination recommendations, and budget estimates using a collaborative Multi-Agent AI architecture built with CrewAI, FastAPI, and React.
## 🚀 Overview
Voyanta AI is a full-stack Agentic AI application that helps travelers plan trips based on:
* Destination
* Budget
* Trip Duration
* Personal Interests

Unlike traditional AI applications that rely on a single model response, Voyanta AI uses multiple specialized AI agents that work together to create a smarter and more personalized travel plan.

---

 🤖 Agentic AI Architecture

Voyanta AI leverages a Multi-Agent AI workflow using CrewAI.

 Research Agent

* Discovers attractions and experiences
* Finds local points of interest
* Suggests restaurants and activities

### Budget Agent

* Estimates trip expenses
* Allocates spending across categories
* Generates overall budget summaries

### Itinerary Agent

* Creates day-wise travel plans
* Organizes activities efficiently
* Generates the final personalized itinerary

This agent-based architecture allows each AI agent to focus on a specialized task, improving the quality of recommendations and planning.

---
 ✨ Features

### 🌍 Smart Travel Planning

* Personalized itineraries
* Destination recommendations
* Local experiences
* Travel suggestions

### 💰 Budget Planning

* Hotel budget estimates
* Food budget estimates
* Transportation planning
* Activity cost estimates
* Total trip budget summary

### 🗓️ Day-Wise Itinerary Generation

* Multi-day trip planning
* Attraction recommendations
* Restaurant suggestions
* Travel guidance

### 🎨 Modern User Interface

* Glassmorphism design
* Responsive layout
* Animated particle background
* Interactive experience

---

## 🏗️ System Architecture

Frontend (React + Vite)

⬇

FastAPI Backend

⬇

CrewAI Agent Orchestration

├── Research Agent

├── Budget Agent

└── Itinerary Agent

⬇

Groq LLM

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Markdown
* Lucide React

### Backend

* Python
* FastAPI
* Uvicorn
* Pydantic

### AI & Agentic Systems

* CrewAI
* Groq LLM
* Multi-Agent Architecture
* Prompt Engineering

### Development Tools

* Git
* GitHub
* VS Code

---

## 📁 Project Structure

voyanta-ai/

├── backend/

│ ├── agents/

│ ├── api/

│ ├── services/

│ ├── models/

│ ├── schemas/

│ └── main.py

│

├── frontend/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── services/

│

└── README.md

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/vandana2v/multi-agent-travel-planner.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
GROQ_API_KEY=YOUR_API_KEY
```

Run Backend:

```bash
uvicorn main:app --reload
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## 🎯 Skills Demonstrated

* Agentic AI
* Multi-Agent Systems
* CrewAI
* Prompt Engineering
* FastAPI
* React
* Tailwind CSS
* REST APIs
* Full Stack Development
* Git & GitHub
* AI Application Development
---
## 📚 Learning Outcomes

Through this project I gained practical experience in:

* Designing Agentic AI workflows
* Building Multi-Agent systems
* Full-stack web development
* API integration
* LLM orchestration
* Frontend-backend communication
* Version control and collaboration

---

## 🔮 Future Improvements

* Real-Time Weather Integration
* Google Maps Integration
* Flight Recommendations
* Hotel Booking APIs
* User Authentication
* Trip History Management
* PDF Itinerary Export
* Multi-Language Support
* Voice-Based Travel Planning
---
## ⭐ Acknowledgements
Built using:
* CrewAI
* FastAPI
* React
* Tailwind CSS
* Groq LLM

This project was developed as a learning-focused Agentic AI application to explore Multi-Agent Systems and Full-Stack AI Development.
