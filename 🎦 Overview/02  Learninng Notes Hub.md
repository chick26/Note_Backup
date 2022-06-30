---
title: Learninng Notes Hub
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview%%%%
banner: "![[cube.jpg]]"
---
<div class="title" style="color:#fff">Learning Notes Hub</div>

💡 [[00 JS Notes Hub| JS Learning]] | 🛳️ [[00 Ship's Log|Ship's Log]] | 📚 [[00 Media Log | Media Log]] 

Summaries of the daily notes go here!

# 📆 This Week Updates

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库"
where file.mtime > (date(now) - dur(7 days)) 
and contains(file.name, "Notes Hub")
SORT file.name desc
```

# 🗞 Archive List

### 2022
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries
from "📔 Daily Note | 日记仓库/Note Repo"
WHERE file.day >= date(2022-01-01) AND file.day <=date(2022-12-31)
SORT file.name desc
````
