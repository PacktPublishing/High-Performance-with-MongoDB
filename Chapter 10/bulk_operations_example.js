// Instead of multiple single inserts

const bulkOp = collection.initializeUnorderedBulkOp();

for (const doc of documents) {
  bulkOp.insert(doc);
}

await bulkOp.execute();
