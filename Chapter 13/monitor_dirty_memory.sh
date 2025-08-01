cat /proc/meminfo | grep -E "Dirty|Mem"

# Example output:
#   MemTotal:       32126312 kB
#   MemFree:         3067873 kB
#   MemAvailable:    3134261 kB
#   Dirty:           6425262 kB
