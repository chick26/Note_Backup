---
title: Learning Note OverView
creation date: 2022-03-01 21:51 
cssclass: homePage
tags:
banner: "![[宁静.JPG]]"
banner_x: 0.5
banner_y: 0.85
banner_lock: true
---
# Inbox TOC

This is the Table of Contents of My Box. **ALL SHOULD BE REVIEW IN TIME**

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
sort file.ctime desc
```
