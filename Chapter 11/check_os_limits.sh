ulimit -n       # For the current shell session
cat /proc/$(pidof mongod)/limits  # For the running MongoDB process
