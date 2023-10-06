from fastapi import APIRouter, Body, Depends, HTTPException


router = APIRouter()


@router.post("/signup", response_description="User created")
async def create_user(user_model):
    return 'dd'


@router.post("/login", response_description="User logged in")
async def login_user(user_model):
    '--'
