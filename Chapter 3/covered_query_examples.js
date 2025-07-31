// Example: Covered query and non-covered query
// Create index for covered query

db.orders.createIndex({ orderId: 1, status: 1 })

// Covered query (all fields in index)
db.orders.find({ orderId: 295 }, { _id: 0, status: 1 })

// Not covered query (needs to fetch documents)
db.orders.find({ orderId: 295 }, { _id:0, total: 1 })
