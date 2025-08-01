// List unsharded collections
db.getCollectionNames().forEach(collectionName => {
  if (!db[collectionName].stats().sharded) {
    print(collectionName);
  }
});

// List sharded collections
db.getCollectionNames().forEach(collectionName => {
  if (db[collectionName].stats().sharded) {
    print(collectionName);
  }
});
