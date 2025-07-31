// Only retrieve necessary fields

const result = await collection.findOne(
  { _id: documentId },
  { projection: { name: 1, email: 1 } }
);
