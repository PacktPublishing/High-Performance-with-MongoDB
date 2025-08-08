// Colocating sharded collection chunks together for TPC-C benchmark
sh.shardCollection("db.WAREHOUSE", {w_id:1})
sh.shardCollection("db.DISTRICT", {w_id:1, d_id:1})
sh.shardCollection("db.CUSTOMER", {w_id:1, d_id:1, c_id:1})
sh.shardCollection("db.ORDERS", {w_id:1, d_id:1, c_id:1, o_id:1})

// Associate each shard to a unique zone
sh.addShardToZone("shardA", "ZoneA")
sh.addShardToZone("shardB", "ZoneB")
sh.addShardToZone("shardC", "ZoneC")

// For each collection, associate the range with the same prefix to the same zone
sh.addTagRange("db.WAREHOUSE",{w_id:MinKey},{w_id:33},"ZoneA")
sh.addTagRange("db.DISTRICT", {w_id:MinKey,d_id:MinKey}, {w_id:33, d_id:MinKey},"ZoneA")
sh.addTagRange("db.CUSTOMER", {w_id:MinKey,d_id:MinKey,c_id:MinKey}, {w_id:33,d_id:MinKey,c_id:MinKey},"ZoneA")
sh.addTagRange("db.ORDERS", {w_id:MinKey,d_id:MinKey,c_id:MinKey,o_id:MinKey}, {w_id:33, d_id:MinKey,c_id:MinKey,o_id:MinKey},"ZoneA")

sh.addTagRange("db.WAREHOUSE", {w_id:33},{w_id:66},"ZoneB")
sh.addTagRange("db.DISTRICT", {w_id:33,d_id:MinKey},{w_id:66,d_id:MinKey},"ZoneB")
sh.addTagRange("db.CUSTOMER", {w_id:33,d_id:MinKey,c_id:MinKey}, {w_id:66,d_id:MinKey, c_id:MinKey},"ZoneB")
sh.addTagRange("db.ORDERS", {w_id:33,d_id:MinKey,c_id:MinKey,o_id:MinKey}, {w_id:66,d_id:MinKey,c_id:MinKey,o_id:MinKey},"ZoneB")

sh.addTagRange("db.WAREHOUSE", {w_id:66}, {w_id:MaxKey},"ZoneC")
sh.addTagRange("db.DISTRICT", {w_id:66,d_id:MinKey}, {w_id:MaxKey,d_id:MaxKey},"ZoneC")
sh.addTagRange("db.CUSTOMER", {w_id:66,d_id:MinKey,c_id:MinKey}, {w_id:MaxKey, d_id:MaxKey, c_id:MaxKey},"ZoneC")
sh.addTagRange("db.ORDERS", {w_id:66,d_id:MinKey,c_id:MinKey,o_id:MinKey}, {w_id:MaxKey,d_id:MaxKey,c_id:MaxKey,o_id:MaxKey},"ZoneC")
