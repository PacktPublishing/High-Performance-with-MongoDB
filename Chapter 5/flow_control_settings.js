// Check current flow control settings  
db.adminCommand({ getParameter: 1, flowControlTargetLagSeconds: 1 });

// Configure flow control settings  
db.adminCommand({   
  setParameter: 1,   
  flowControlTargetLagSeconds: 10   
});
