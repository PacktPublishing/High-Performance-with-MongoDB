// Performance tuning: Set minimum snapshot history window to 5 seconds
// Run in the MongoDB shell

db.adminCommand({setParameter: 1, minSnapshotHistoryWindowInSeconds: 5})
