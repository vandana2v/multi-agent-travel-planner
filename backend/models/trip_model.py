from sqlalchemy import Column, Integer, String
from database.db import Base

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    destination = Column(String)
    budget = Column(Integer)