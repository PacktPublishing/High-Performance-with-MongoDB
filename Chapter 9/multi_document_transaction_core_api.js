// Start a session and transaction  
const session = client.startSession();  
session.startTransaction();

try {  
  // 1. Create and insert the order document  
  const order = {  
    customerId: "customer123",  
    items: [  
      { productId: "product456", quantity: 2, price: 25.99 },  
      { productId: "product789", quantity: 1, price: 49.99 }  
    ],  
    totalAmount: 101.97,  
    status: "processing",  
    createdAt: new Date()  
  };

  const orderResult = await db.orders.insertOne(order, { session });
  const orderId = orderResult.insertedId;

  // 2. Update inventory for multiple products
  await db.inventory.updateOne(
    { _id: "product456" },
    { $inc: { stockCount: -2 } },
    { session }
  );

  await db.inventory.updateOne(
    { _id: "product789" },
    { $inc: { stockCount: -1 } },
    { session }
  );
    
  // 3. Update customer purchase history
  await db.customers.updateOne(
    { _id: "customer123" },
    {
      $inc: { totalSpent: 101.97, orderCount: 1 }
    },
    { session }
  );

  // If all operations succeed, try to commit the transaction
  await session.commitTransaction();
} catch (error) {
  // If an error occurred, abort the transaction
  await session.abortTransaction();
  console.error("Transaction aborted due to error:", error);
  throw error;
} finally {
  // End the session
  session.endSession();
}
