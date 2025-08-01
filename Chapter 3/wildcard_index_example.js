// Example: Create wildcard index
// MongoDB command to create a wildcard index

db.collection.createIndex({ "attr.$**": 1 })    
// Sample document
// { ...,
//   attr: {
//      genre: "Mystery",
//      author: "John Smith",
//      pages: NumberInt(298),
//      ...
//   }
// }
// query using the index  
db.collection.find({"attr.pages":{$gt:500}})
