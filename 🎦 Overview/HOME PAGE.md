---
title: Learning Note OverView
creation date: 2022-03-01 21:51 
cssclass: homePage
tags:
banner: "![[宁静.JPG]]"
banner_x: 0.5
banner_y: 0.85
banner_lock: true
%%obsidianUIMode: preview%%
---
<div class="title" style="color:#fff">HOME</div>

This is the Table of Contents of My Box. **ALL SHOULD BE REVIEW IN TIME**

# 🗂 PERSONAL OBJECT
-  📲 Front Dev
```dataviewjs
dv.list("[[" + dv.pages('"🛖 Learning Repo｜学习仓库/📲 Front Dev｜前端开发"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.name + "]]")
```
 `$=dv.list(dv.pages('"🛖 Learning Repo｜学习仓库/📲 Front Dev｜前端开发"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- 💵 CFA
`$=dv.list(dv.pages('"🛖 Learning Repo｜学习仓库/💵 CFA | 金融分析师"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`

- 🌅 Exotic Vacations


- 🎥 Movies to Watch


## WAITING LIST

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库"
where status = "todo"
sort file.mtime asc
```

## DOING LIST

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库"
where status = "ondo"
sort file.mtime asc
```

## REVIEW LIST

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
tags as TAG,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED
from "🛖 Learning Repo｜学习仓库"
where status = "done" or status = "review"
limit 10
```

