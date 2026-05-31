import httpx
import os

async def get_weather(city):
    api_key = os.getenv("WEATHER_API_KEY")

    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.json()