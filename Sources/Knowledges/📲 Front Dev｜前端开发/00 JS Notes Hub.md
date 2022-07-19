---
title: JS Notes Hub
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[color.jpg]]"
---
<div class="title" style="color:#000">JS Notes Hub</div>

<-  [[02  Learninng Notes Hub|⛵️ Learning Notes Hub ]] | 🛳️  [[00 D.S. Notes Hub|Data Structure Notes Hub]]


# 📆 This Week Updates

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库/📲 Front Dev｜前端开发"
where file.mtime > (date(now) - dur(7 days)) 
and !contains(file.name, "Notes Hub")
SORT file.name desc
```

# 🗞 Archive List

### 2022
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库/📲 Front Dev｜前端开发"
where file.ctime >= date(2022-01-01) AND file.ctime <=date(2022-12-31)
and !contains(file.name, "Notes Hub")
SORT file.name desc
````
