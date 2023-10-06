from fastapi import APIRouter, Body, Depends, HTTPException
from database import database

users_collection = database.get_collection('courses')
router = APIRouter()

@router.get("/", response_description="Get all artists")
async def insert_course(name: str = '')  -> list:
    data = {
        'name': 'hi',
        'class': 'd'
    }
    user = await users_collection.insert_one(data)
    return ''