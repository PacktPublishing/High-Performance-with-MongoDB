# Example: Explain Output on a Shard which needs to filter out orphan documents
winningPlan: {
   stage: 'SHARD_MERGE',
   shards: [
     {
       shardName: 'shard01',
       winningPlan: {
         stage: 'FETCH',
         inputStage: {
           stage: 'SHARDING_FILTER',
           inputStage: {
              stage: 'IXSCAN',  
              keyPattern: { id: 1 },  
              ...
