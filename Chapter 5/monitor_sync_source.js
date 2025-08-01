// Check the sync source for each member  
rs.status().members.forEach(function(member) {  
  print("Member: " + member.name +   
        ", Sync Source: " + (member.syncSourceHost || "none") +  
        ", State: " + member.stateStr);  
});
