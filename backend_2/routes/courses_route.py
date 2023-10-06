from fastapi import APIRouter, Body, Depends, HTTPException
from database import database

users_collection = database.get_collection('courses')
router = APIRouter()

@router.get("/", response_description="Get all courses")
async def get_all_course() -> list:
    users = users_collection.find({}, {'_id': 0})
    items = [item async for item in users]
    return items

@router.get("/{name}",)
async def get_all_course(name) -> list:
    users = users_collection.find({'name': name}, {'_id': 0})
    items = [item async for item in users]
    return items

@router.post("/insert", response_description="insert course")
async def insert_course(body: dict = Body(...)):
    data = {
        'name': body['name'],
        'class': body['class'],
        'questions': body['questions'],
    }
    user = await users_collection.insert_one(data)
    return 'class added'