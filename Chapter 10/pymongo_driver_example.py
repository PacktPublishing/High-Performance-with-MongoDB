from pymongo import MongoClient

client = MongoClient()  
db = client.my_database  
users = db.users  
user = users.find_one({"email": "john@example.com"})  
print(f"Name: {user['first_name']} {user['last_name']}")
