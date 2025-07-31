// Run from the MongoDB shell
// Example: Extract key operational metrics in the MongoDB shell
const status = db.serverStatus();
printjson({
  opcounters:     status.opcounters,           // reads, writes, commands
  memUsageMB:     status.mem.resident,         // resident memory in MB
  cacheStats:     status.wiredTiger.cache,     // WiredTiger cache utilization
  connections:    status.connections           // active vs available
});
