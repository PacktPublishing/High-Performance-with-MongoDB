// Example: Create partial index
// MongoDB command to create a partial index

db.orders.createIndex(  
  { country: 1, dateOrdered: 1 },  
  { partialFilterExpression: { status: "processing" } }  
)
