// Run from the MongoDB shell
// Check WiredTiger cache usage and eviction metrics
const wtCache = db.serverStatus().wiredTiger.cache;
const bytesInCache = wtCache["bytes currently in the cache"];
const maxBytes = wtCache["maximum bytes configured"];
const evictedPages = wtCache["unmodified pages evicted"];

print(`Cache utilization: ${(bytesInCache/maxBytes*100).toFixed(2)}%`);
print(`Evicted pages: ${evictedPages}`);
