// MongoDB Node.js driver code snippet
// Opening a change stream with a filter pipeline
const pipeline = [
  // Only capture update operations on the products collection
  { $match: { 'ns.coll': 'products', operationType: 'update' } },
  // Further filter to only include price updates
  { $match: { 'updateDescription.updatedFields.price': { $exists: true } } },
];

const filteredStream = collection.watch(pipeline);
