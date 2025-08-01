// Example showing proper transaction read/write concern configuration  
session.startTransaction({  
  readConcern: { level: "snapshot" },  // Default  
  writeConcern: { w: "majority" }      // Default   
});
