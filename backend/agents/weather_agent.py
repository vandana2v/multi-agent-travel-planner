from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm


load_dotenv()

weather_agent = Agent(

    role="Weather Intelligence Expert",

    goal="Analyze weather conditions and provide travel advice.",

    backstory="""
    You are a weather analysis expert
    specialized in travel safety,
    climate analysis,
    packing recommendations,
    and weather-aware trip planning.
    """,

    verbose=False,

    allow_delegation=False,

    llm=llm
)