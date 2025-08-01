// Example: Setting an index hint for a specific database, collection, and query shape
// This demonstrates how to use setQuerySettings in MongoDB 8.0+
db.adminCommand( {
  setQuerySettings: {
    find: "collName",
    filter: {<filter>},
    $db:"dbName"
  },
  settings: {
    indexHints: {
      ns: { db: "dbName", coll: "collName"},
      allowedIndexes: ["indexName"]
    }
  }
})
