// Performance tuning: Set WiredTiger leaf page size to 8kB for a specific collection
// Run in the MongoDB shell

db.createCollection("myCollection", {
  storageEngine: {    
    wiredTiger: {    
      configString: "leaf_page_max=8192"    
    }    
  }    
})
