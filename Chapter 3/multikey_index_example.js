// If documents have: { tags: ["electronics", "sale", "new"] }  
db.collection.createIndex({ tags: 1 })
// Creates index entries for "electronics", "sale", and "new"  
// all of which point to the same recordID  
