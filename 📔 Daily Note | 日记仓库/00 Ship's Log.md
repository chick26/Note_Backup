---
title: Ship's Log
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[Ship.jpeg]]"
banner_y: 1
---
<div class="title" style="color:#fff"> Ship's Log</div>

<- [[01 Daily Notes Hub | Daily Notes Hub]] | 💡 [[00 New Discoveries Log | New Discoveries]] | 📚 [[00 Media Log | Media Log]] 

# ⛽️ Life Happenings

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
LifeEvent as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(LifeEvent, "")
```

# 🧰 Personal Projects

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
PersonalProjects as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(PersonalProjects, "")
```