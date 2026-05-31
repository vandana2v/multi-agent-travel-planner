from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm

import os

load_dotenv()

planner_agent = Agent(

    role="Master Travel Planner",

    goal="Create intelligent and optimized travel itineraries.",

    backstory="""
    You are an elite AI travel planner
    specialized in personalized travel,
    luxury trips, budget optimization,
    and itinerary planning.
    """,

    verbose=False,

    allow_delegation=True,

    llm=llm
)