// Run from the MongoDB shell
// Check replication lag on all secondary nodes
const rsStatus = rs.status();
const primary = rsStatus.members.find(m => m.state === 1);
rsStatus.members.forEach(member => {
  if (member.state === 2) { // secondary
    const lagSeconds = Math.abs((primary.optimeDate.getTime() -   
                               member.optimeDate.getTime()) / 1000);
    print(`Secondary ${member.name} lag: ${lagSeconds.toFixed(2)}s`);
  }
});

// Check oplog window size
const oplogInfo = db.getReplicationInfo();
print(`Oplog window: ${oplogInfo.timeDiff / 3600}h`);
