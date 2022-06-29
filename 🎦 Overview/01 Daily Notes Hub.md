---
title: Daily Notes Hub
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[roadToHaven.jpg]]"
---
<div class="title" style="color:#fff">Daily Notes Hub</div>
💡 [[00 New Discoveries Log | New Discoveries]] | 🛳️ [[00 Ship's Log|Ship's Log]] | 📚 [[00 Media Log | Media Log]] 

Summaries of the daily notes go here!

# 📆 This Week

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
Summary
from "📔 Daily Note | 日记仓库/Note Repo"
SORT file.name desc
LIMIT 7
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
