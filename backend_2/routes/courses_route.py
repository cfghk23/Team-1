from fastapi import APIRouter, Body, Depends, HTTPException
from database import database

users_collection = database.get_collection('student')
router = APIRouter()

@router.get("/", response_description="Get all artists")
async def get_artists(name: str = '')  -> list:
    user = await users_collection.find_one()
    return user