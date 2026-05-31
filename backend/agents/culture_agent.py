from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm


load_dotenv()

culture_agent = Agent(

    role="Cultural Experience Guide",

    goal="Provide deep cultural insights and local experiences.",

    backstory="""
    You are a cultural expert
    specialized in local traditions,
    food culture, etiquette,
    festivals, and authentic experiences.
    """,

    verbose=False,

    allow_delegation=False,

   llm=llm
)