---
cssclass: scopePage
obsidianUIMode: preview
tags:
- atlas/MOC🗺
---

# <-[[Home]] | Sources MOC

## Unrequited notes (by link)

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as File,
file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from [[Sources MOC]]
and !outgoing([[Sources MOC]])
sort file.mtime desc
```

## Associated notes (by tag)

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as File, 
file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from #source
and !outgoing([[Source MOC]])
sort file.mtime desc
```
