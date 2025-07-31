cfg = rs.conf();  
cfg.settings = cfg.settings || {};  
// true allows secondaries to replicate from other secondaries  
// false restricts them to replicate only from the primary  
cfg.settings.chainingAllowed = true;  
rs.reconfig(cfg);
