// Performance tuning: Increase WiredTiger cache size to 20GB
// Run in the MongoDB shell

db.adminCommand({setParameter: 1, wiredTigerEngineRuntimeConfig: 'cache_size=20G'})
