try {  
  const result = await collection.insertOne(document);  
  console.log(`Document inserted with _id: ${result.insertedId}`);  
} catch (err) {  
  if (err.code === 11000) {  
    console.error('Duplicate key error');  
  } else if (err instanceof MongoNetworkError) {  
    console.error('Network error occurred');  
  } else {  
    console.error('An error occurred:', err);  
  }  
}