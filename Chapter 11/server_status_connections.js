db.adminCommand({ serverStatus: 1 }).connections

// output example
// {
//     "connections": {
//         "current": 123,       // Current active connections
//         "available": 63877,   // Remaining available connections
//         "totalCreated": 1578  // Total connections created since startup
//     }
// }
