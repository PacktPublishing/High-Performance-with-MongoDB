// Start a session  
const session = client.startSession();

// Start a transaction  
session.startTransaction();

try {  
  // Perform operations within the transaction  
  await collection1.updateOne({ _id: 1 }, { $set: { status: "active" } }, { session });  
  await collection2.insertOne({ refId: 1, details: "..." }, { session });  
    
  // Commit the transaction  
  await session.commitTransaction();  
} catch (error) {  
  // If an error occurred, abort the transaction  
  await session.abortTransaction();  
  throw error;  
} finally {  
  // End the session  
  session.endSession();  
}
