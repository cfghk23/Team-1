from fastapi import FastAPI
import uvicorn
from routes.user_route import router as UserRouter
from routes.courses_route import router as CoursesRouter
from routes.teacher_route import router as TeacherRouter
# from routes.portfolio_route import router as PortfolioRouter
# from routes.leaderboard_route import router as LeaderboardRouter
from fastapi.middleware.cors import CORSMiddleware
import logging
from decouple import config
from database import database


logging.basicConfig(level=logging.INFO)


if __name__ == "__main__":
    uvicorn.run("server.app:app", host="127.0.0.1",
                port=8001, reload=True, log_level="info")



app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(UserRouter, tags=["Users"], prefix="/users")
app.include_router(CoursesRouter, tags=["Courses"], prefix="/courses")
app.include_router(TeacherRouter, tags=["Class"], prefix="/teachers")
# app.include_router(PortfolioRouter, tags=[
#                    "Portfolios"], prefix="/v0.1/portfolios")
# app.include_router(LeaderboardRouter, tags=[
#                    "Leaderboards"], prefix="/v0.1/leaderboards")


@app.get("/")
async def root():
    return {"message": "Pong"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
