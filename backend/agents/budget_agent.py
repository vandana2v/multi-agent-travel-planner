from crewai import Agent
from dotenv import load_dotenv
from config.llm import llm

load_dotenv()

budget_agent = Agent(

    role="Travel Budget Planner",

    goal="Create optimized and realistic travel budgets.",

    backstory="""
    You are a financial travel expert
    specialized in trip cost optimization,
    expense planning, and smart budgeting.
    """,

    verbose=True,

    allow_delegation=False,

    llm=llm
)