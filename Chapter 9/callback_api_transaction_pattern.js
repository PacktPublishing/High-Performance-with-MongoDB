// Using the Callback API  
await client.withSession(async (session) => {  
  return await session.withTransaction(async () => {  
    // Perform operations within the transaction  
    await collection1.updateOne({ _id: 1 }, { $set: { status: "active" } }, { session });  
    await collection2.insertOne({ refId: 1, details: "..." }, { session });  
  });  
});
