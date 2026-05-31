from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm


load_dotenv()

research_agent = Agent(

    role="Travel Research Specialist",

    goal="Research the best tourist attractions and experiences.",

    backstory="""
    You are an expert travel researcher
    who finds hidden gems, local attractions,
    restaurants, nightlife, and unique experiences.
    """,

    verbose=False,

    allow_delegation=False,

    llm=llm
)