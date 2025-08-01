// Enable database profiler for current database
// Run from the MongoDB shell
db.setProfilingLevel(1, { slowms: 20, sampleRate: 0.42 })
