conf = rs.conf();  
conf.members[0].tags = { "usage": "production" };  
conf.members[1].tags = { "usage": "reporting" };  
conf.members[2].tags = { "usage": "production" };  
rs.reconfig(conf);
