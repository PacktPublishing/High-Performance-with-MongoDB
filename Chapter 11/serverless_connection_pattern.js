const { MongoClient } = require('mongodb');
// MongoClient now auto-connects so no need to store the connect()
// promise anywhere and reference it.
const client = new MongoClient(process.env.MONGODB_URI);

export const handler = async() => {
  const databases = await client.db('admin').command({ listDatabases: 1 });
  return {
    statusCode: 200,
    databases: databases
  };
};
