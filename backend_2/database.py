import motor.motor_asyncio
from decouple import config

#DB Connection Objects and Variables
MONGO_URL = 'mongodb+srv://pats:arcticmonkeys@firstever.nrokl.mongodb.net/test'
MONGO_DB = 'cfg'

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
database = client[MONGO_DB]
# prod_database = client['prod-artcentral']
