// Run from the MongoDB shell
// Find the 5 most recent profiled operations
db.system.profile.find().sort({ ts: -1 }).limit(5).forEach(printjson)
