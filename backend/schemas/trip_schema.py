from pydantic import BaseModel
from typing import List

class TripRequest(BaseModel):
    destination: str
    budget: int
    days: int
    interests: List[str]