db.collection.insertOne(  
  { item: "example" },  
  {   
    writeConcern: {   
      w: "majority",   
      wtimeout: 5000   
    }   
  }  
);
