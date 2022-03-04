---
title: Learning Note OverView
creation date: 2022-03-01 21:51 
tags:
---
```dataview
table WITHOUT ID
("[[" + file.name + "]]") as TITLE,
file.mtime as MODIFIED,
file.ctime as CREATED,
status as STATUS
from "🛖 Learning Repo｜学习仓库"
sort status desc
```

