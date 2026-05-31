from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm


load_dotenv()

itinerary_agent = Agent(

    role="Itinerary Planning Specialist",

    goal="Create detailed and optimized daily travel itineraries.",

    backstory="""
    You are an itinerary optimization expert
    specialized in creating highly efficient,
    enjoyable, and balanced travel schedules.
    """,

    verbose=False,

    allow_delegation=False,

    llm=llm
)