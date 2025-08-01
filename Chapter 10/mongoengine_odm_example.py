# With MongoEngine ODM  
from mongoengine import Document, StringField, connect

connect('my_database')

class User(Document):  
    first_name = StringField(required=True, max_length=50)  
    email = StringField(required=True, unique=True)

user = User.objects.get(email="john@example.com")  
print(f"Name: {user.first_name} {user.last_name}")
