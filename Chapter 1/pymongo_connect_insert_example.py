from pymongo import MongoClient

# This simple connection code hides a lot of complexity  
client = MongoClient('mongodb://localhost:27017/')  
db = client['mydatabase']  
collection = db['mycollection']

# Now you can talk to MongoDB using Python syntax  
document = {"name": "Jane Doe", "age": 30, "email": "janedoe@example.com"}  
result = collection.insert_one(document)
