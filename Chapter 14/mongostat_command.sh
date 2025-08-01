# Run from the System Command Line
mongostat --host localhost:27017 --rowcount 2

# Sample output:
insert  query update delete getmore command  dirty used flushes vsize  res
    0      8      0      0       0      3|0   3.4% 7.4%       0 1.2G   512M
    1     12      0      0       0      5|0   3.7% 2.5%       0 1.2G   210M
