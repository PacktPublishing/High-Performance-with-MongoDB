// Example: Equality query
// MongoDB query using equality on multiple fields

db.collection.find({country: "US", state: "NY", zipString: "10001"})
