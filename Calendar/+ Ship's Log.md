---
title: Ship's Log
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[Ship.jpeg]]"
banner_y: 1
---
<div class="title" style="color:#fff"> Ship's Log</div>

<- [[+ Index for Calendar | Daily Notes Hub]] | 💡 [[+ New Discoveries Log | New Discoveries]] | 📚 [[+ Media Log | Media Log]] 

# ⛽️ Life Happenings

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
LifeEvent as "Log"
from "Calendar"
where contains(LifeEvent, "")
```

# 🧰 Personal Projects

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
PersonalProjects as "Log"
from "Calendar"
where contains(PersonalProjects, "")
```