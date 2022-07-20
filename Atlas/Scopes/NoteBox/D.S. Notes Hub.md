---
title: DataStructure Notes Hub
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[color.jpg]]"
banner_y: 0.5
---
<div class="title" style="color:#000">Data Structure Notes Hub</div>

<-  [[Notebox 🗃|⛵️ Learning Notes Hub ]] | 🛳️  [[JS Notes Hub|JS Notes]] 


# 📆 This Week Updates

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "Sources/Knowledges/📉 Data Structrue｜数据结构"
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
from "Sources/Knowledges/📉 Data Structrue｜数据结构"
where file.ctime >= date(2022-01-01) AND file.ctime <=date(2022-12-31)
and !contains(file.name, "Notes Hub")
SORT file.name desc
````
