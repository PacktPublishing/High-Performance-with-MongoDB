const docs = await collection.find({}, {timeoutMS: 1000}).toArray();
