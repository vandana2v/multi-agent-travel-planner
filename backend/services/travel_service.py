from crewai import Crew, Task, Process
from fastapi import HTTPException

from agents.research_agent import research_agent
from agents.budget_agent import budget_agent
from agents.itinerary_agent import itinerary_agent


async def generate_trip(data):

    try:

        # RESEARCH TASK

        research_task = Task(

            description=f"""
            Research the best places to visit in {data.destination}.

            User Interests:
            {', '.join(data.interests)}

            Find:
            - Tourist attractions
            - Popular restaurants
            - Local experiences

            Keep the response short and useful.
            """,

            expected_output="""
            List of attractions, restaurants and experiences.
            """,

            agent=research_agent
        )

        # BUDGET TASK

        budget_task = Task(

            description=f"""
            Create a budget estimate for a
            {data.days}-day trip to {data.destination}.

            Total Budget: ₹{data.budget}

            Calculate:

            - Hotel total cost
            - Food total cost
            - Transport total cost
            - Activities total cost

            Keep response under 80 words.
            """,

            expected_output="""
            Budget breakdown.
            """,

            agent=budget_agent
        )

        # ITINERARY TASK

        itinerary_task = Task(

            description=f"""
            Create a travel itinerary for
            {data.destination}.

            Duration: EXACTLY {data.days} days.

            Interests:
            {', '.join(data.interests)}

            Rules:

            - Generate EXACTLY {data.days} days
            - Maximum 2 attractions per day
            - Keep descriptions under 8 words
            - No long paragraphs
            - Keep response concise
            """,

            expected_output="""
            Day-wise itinerary.
            """,

            agent=itinerary_agent
        )

        # FINAL TASK

        final_task = Task(

            description=f"""
            Combine all previous outputs into one final travel plan.

            FORMAT:

            DAY 1

            🏨 Stay: Hotel Name

            📍 Place Name
            Short description.
            Cost: ₹xxx

            📍 Place Name
            Short description.
            Cost: ₹xxx

            🍽 Restaurant Name
            Approx Cost: ₹xxx

            --------------------------------

            DAY 2

            📍 Place Name
            Short description.
            Cost: ₹xxx

            📍 Place Name
            Short description.
            Cost: ₹xxx

            --------------------------------

            Continue until DAY {data.days}

            IMPORTANT RULES:

            - Generate EXACTLY {data.days} days.
            - Show hotel only on DAY 1.
            - Maximum 2 attractions per day.
            - Mention restaurant only when useful.
            - Mention transport only if necessary.
            - Do NOT write:
              "Restaurant Recommendation"
              "Transport Recommendation"
            - Keep descriptions under 8 words.
            - Use real attraction names.
            - No long paragraphs.
            - Clean and easy-to-read format.

            After all days show:

            =================================

            TRIP BUDGET SUMMARY

            🏨 Hotel: ₹xxxx
            🍽 Food: ₹xxxx
            🚕 Transport: ₹xxxx
            🎯 Activities: ₹xxxx

            💰 Total Cost: ₹xxxx
            """,

            expected_output="""
            Complete travel itinerary with budget summary.
            """,

            context=[
                research_task,
                budget_task,
                itinerary_task
            ],

            agent=itinerary_agent
        )

        # CREATE CREW

        crew = Crew(

            agents=[
                research_agent,
                budget_agent,
                itinerary_agent
            ],

            tasks=[
                research_task,
                budget_task,
                itinerary_task,
                final_task
            ],

            process=Process.sequential,

            verbose=False
        )

        # RUN CREW

        result = crew.kickoff()

        return {
            "success": True,
            "destination": data.destination,
            "days": data.days,
            "budget": data.budget,
            "trip_plan": str(result)
        }

    except Exception as e:

        print("TRAVEL SERVICE ERROR:", str(e))

        raise HTTPException(
            status_code=500,
            detail=f"Trip generation failed: {str(e)}"
        )