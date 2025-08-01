db.currentOp({"secs_running":{ $gte: 10}}).inprog
// Command output
[
  {
    type: 'op',
    opid: 201,
    host: 'somewhere.net:27017',
    connectionId: 1063017,
    client: '555.111.222.333:47140',
    currentOpTime: '2024-12-31T00:29:08.230+00:00',
    threaded: true,
    secs_running: Long('5410'),
    microsecs_running: Long('5410001296'),
    op: 'command',
    ns: 'admin.$cmd',
    command: {
      /* Redacted */
    },
    "planSummary": "COLLSCAN",
    numYields: 0,
    locks: {},
  }
]
