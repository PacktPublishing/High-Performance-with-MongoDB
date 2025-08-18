from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['store_database']
collection = db['products']

# Define a product document with nested information
product = {
    "name": "Ergonomic Keyboard",
    "price": 129.99,
    "category": "Computer Accessories",
    "details": {
        "weight": 1.2,
        "dimensions": "18 x 6 x 1 inches"
    },
    "reviews": [
        {
            "user_id": "user456",
            "rating": 5,
            "comment": "Best keyboard ever!"
        },
        {
            "user_id": "user789",
            "rating": 4,
            "comment": "Great feel, but a bit pricey."
        }
    ]
}

# Insert the document
collection.insert_one(product)

# Find affordable products
affordable_products = collection.find({'price': {'$lt': 100}})
for product in affordable_products:
    print(f"Found affordable product: {product['name']}")
