// Example: Forcing find to use index by its name via a hint
// This demonstrates how to use the hint method in MongoDB queries.
db.coll.find({<filter>}).hint("indexName")
