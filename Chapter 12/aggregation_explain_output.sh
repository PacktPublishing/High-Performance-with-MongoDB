# Example: Aggregation Execution Stats Output
# Shows aggregation stages in explain results
stages: [  
{  
  '$cursor': { queryPlanner: { executionStats: { ... } } }  
  nReturned: Long('10805'),  
  executionTimeMillisEstimate: Long('21')  
},  
{  
  '$set': { ... },  
  nReturned: Long('10805'),  
  executionTimeMillisEstimate: Long('21')  
},  
{  
  '$unwind': { ... },  
  nReturned: Long('14804'),  
  executionTimeMillisEstimate: Long('22')  
},  
 {  
  '$group': { ... },  
  maxAccumulatorMemoryUsageBytes: { count: Long('1768') },  
  totalOutputDataSizeBytes: Long('3534'),  
  usedDisk: false,  
  nReturned: Long('13'),  
  executionTimeMillisEstimate: Long('23')  
},  
{  
  '$sort': { sortKey: { count: -1 } },  
  totalDataSizeSortedBytesEstimate: Long('3638'),  
  usedDisk: false,  
  spills: Long('0'),  
  nReturned: Long('13'),  
  executionTimeMillisEstimate: Long('23')  
}
