from fastapi import APIRouter

router = APIRouter()

@router.get("/trips")
async def get_trips():
    return {
        "message": "Trips Route"
    }