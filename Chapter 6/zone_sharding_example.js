// Shard a collection and assign zones for geo-based data placement
sh.shardCollection("db.coll", {country:1, userid:1})
sh.addShardToZone("shard0", "NA")
sh.addShardToZone("shard1", "EU")
sh.addTagRange("db.coll",{country:"DE",userid:MinKey},{country:"DE",userid:MaxKey},"EU")
sh.addTagRange("db.coll",{country:"US",userid:MinKey},{country:"US",userid:MaxKey},"NA")
