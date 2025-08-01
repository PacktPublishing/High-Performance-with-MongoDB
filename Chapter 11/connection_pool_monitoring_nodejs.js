// Node.js example using event listeners for CMAP events
const uri = "mongodb+srv://user:pass@abcdef.mongodb.net/";
const client = new MongoClient(uri);
client.on('connectionPoolCreated', event => console.log(event));
client.on('connectionCheckedOut', event => console.log(event));
client.on('connectionCheckedIn', event => console.log(event));
