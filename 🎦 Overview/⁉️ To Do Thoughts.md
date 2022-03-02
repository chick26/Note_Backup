---
title: To Do Thoughts
creation date: 2022-03-01 21:43 
tags:
- Thoughts
---
```dataview
task
from "📜 Daily Note | 日常记录" 
WHERE contains(string(section), "THOUGHTS") and !completed
FLATTEN file.name AS link(file.name)
GROUP BY Primary
```
