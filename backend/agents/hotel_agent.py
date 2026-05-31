from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm

load_dotenv()

hotel_agent = Agent(

    role="Hotel Recommendation Expert",

    goal="Recommend the best hotels based on budget and preferences.",

    backstory="""
    You are a hospitality specialist
    with expertise in luxury hotels,
    budget stays, resorts, and travel accommodations.
    """,

    verbose=False,

    allow_delegation=False,

    llm=llm
)