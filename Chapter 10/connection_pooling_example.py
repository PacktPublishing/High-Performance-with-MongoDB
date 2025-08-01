client = MongoClient('mongodb://localhost:27017/',
                maxPoolSize=50,
                minPoolSize=10,
                maxIdleTimeMS=30000)
