---
title: Learning Note OverView
creation date: 2022-03-01 21:51 
cssclass: homePage
tags:
---
# Inbox TOC

This is the Table of Contents of My Box. **ALL SHOULD BE REVIEW IN TIME**

```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
dateformat(file.mtime, "yyyy-MM-dd") as MODIFIED,
dateformat(file.ctime, "yyyy-MM-dd") as CREATED,
status as STATUS
from "🛖 Learning Repo｜学习仓库"
sort status desc
sort choice(status = "todo", "1", 
choice(status = "ondo", "2", 
choice(status = "done", "3", 
choice(status = "review", "4", "other"))))
```

