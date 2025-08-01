// Move unsharded collections to specific shards
// Useful for balancing unsharded data across the cluster
db.adminCommand({moveCollection:"testdb.E", toShard:"shard1"})
db.adminCommand({moveCollection:"testdb.F", toShard:"shard1"})
db.adminCommand({moveCollection:"testdb.G", toShard:"shard1"})
db.adminCommand({moveCollection:"testdb.H", toShard:"shard1"})
