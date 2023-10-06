from fastapi import APIRouter, Body, Depends, HTTPException, Request

from database import database
from bson import json_util, ObjectId
import json
from datetime import datetime

teacher_collection = database.get_collection('teacher')
student_collection = database.get_collection('student')
course_collection = database.get_collection('courses')
router = APIRouter()

@router.post("/class/{name}", response_description="class created",status_code=201)
async def create_class(name:str):
    class_ = await teacher_collection.insert_one(
        {
            "class_name":name,
            "students": []
        }
    )
    return {"msg":"class created"}

@router.post("/class/{name}/add_student/{student_id}", response_description="student added",status_code=201)
async def add_student_to_class(name:str,student:str):
    student = await student_collection.find_one({"_id":student})
    class_ = await teacher_collection.update_one(
        {
            "class_name":name,
        },
        {
            "$push": {"students": student}
        }
    )
    return {"msg":"student added"}

def parse_json(data):
    return json.loads(json_util.dumps(data))

## get courses
@router.get("/courses")
async def get_courses():
    courses = await course_collection.find().to_list(1000)
    return parse_json(courses)

@router.get("/courses/{teacher_id}")
async def get_teacher_courses(teacher_id:str):
    courses = await course_collection.find({"created_by":ObjectId(teacher_id)}).to_list(1000)
    return parse_json(courses)

## get course
@router.get("/course/{course_id}")
async def get_courses(course_id:str):
    course = await course_collection.find_one({"_id":ObjectId(course_id)})
    return parse_json(course)



## add course
@router.post("/courses/{teacher_id}",status_code=201)
async def add_course(request:Request,teacher_id:str):
    json = await request.json()
    json["created_at"] = datetime.now()
    json["teacher_id"] = teacher_id
    course = await course_collection.insert_one(
        json
    )
    return {"msg" : "course added"}


