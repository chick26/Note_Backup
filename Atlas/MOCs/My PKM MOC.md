---
tags: 
- atlas/MOC🗺
- x/meta 
---

# <-[[Home]] | PKM MOC

## Unrequited Links
```dataview
table WITHOUT ID
("[[" + file.name + "]]") as File,
file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from [[My PKM MOC (Kit)]]
and !outgoing([[My PKM MOC (Kit)]])
sort file.mtime desc
```

