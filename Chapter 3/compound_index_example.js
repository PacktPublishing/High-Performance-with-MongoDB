// Example: Create compound index
// MongoDB command to create a compound index on multiple fields

db.collection.createIndex({ status: 1, country: 1, zipString: 1 })
