// MongoDB Node.js driver code snippet
// Configuring change streams for optimal performance in sharded clusters
const shardedStreamOptions = {
  fullDocument: 'updateLookup',
  maxAwaitTimeMS: 1000,  // Adjust based on latency requirements  
  batchSize: 100         // Balance between throughput and processing time  
};

// Use collection-level streams where possible to reduce coordination overhead
const productStream = db.collection('products').watch([], shardedStreamOptions);
