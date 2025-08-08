// Create an index on {status:1, zipString:1,state:1,country:1} 
// Only documents with status:"processing" are indexed

db.coll.createIndex(  
    {zipString:1,state:1,country:1},  
    {partialFilterExpression:{status:"processing"}})
