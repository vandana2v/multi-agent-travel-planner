from fastapi import APIRouter
from schemas.trip_schema import TripRequest
from services.travel_service import generate_trip

router = APIRouter()

@router.get("/")
async def test_api():
    return {
        "status": "API Working"
    }

@router.post("/generate-trip")
async def generate_trip_route(data: TripRequest):
    result = await generate_trip(data)
    return result