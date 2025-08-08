// Example of distributing collections to subsets of shards using zones
sh.addShardToZone("shard0", "C1")
sh.addShardToZone("shard1", "C1")
sh.addShardToZone("shard2", "C2")
sh.addShardToZone("shard3", "C2")
sh.addTagRange("db.coll1",{"<shKey>":MinKey},{"<shKey>":MaxKey},"C1")
sh.addTagRange("db.coll2",{"<shKey>":MinKey},{"<shKey>":MaxKey},"C2")
