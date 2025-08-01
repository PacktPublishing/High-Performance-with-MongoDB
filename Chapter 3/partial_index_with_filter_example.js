// Example: Create partial index with partialFilterExpression
// Only documents with status:"processing" are indexed

db.coll.createIndex(  
    {zipString:1,state:1,country:1},  
    {partialFilterExpression:{status:"processing"}})
