---
cssclass: scopePage
obsidianUIMode: preview
tags:
- x/index 
---

# <- [[My PKM MOC | My PKM MOC]]
The beast-like Evernote Web Clipper approaches Gandalf trying to infect and corrupt your PKM sanctuary with hordes of low-value articles you'll never read and that will drown your own thinking a pit of orc-like chaos.

### Choose
- [[Be tempted by power and clip countless articles into your PKM note library.]]
- [[Ask Gandalf for assistance.]]

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
tags
from "Sources" and -#x/index 
sort asc
```