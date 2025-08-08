// Example: Show all indexes on a collection
// MongoDB command to list indexes

db.collection.getIndexes()
// output showing `_id` index only
// [ { "v" : 2, "key" : { "_id" : 1 }, "name" : "_id_" } ]
