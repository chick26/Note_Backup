---
title: Daily Notes Hub
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[roadToHaven.jpg]]"
---
<div class="title" style="color:#fff">Daily Notes Hub</div>

💡 [[+ New Discoveries Log | New Discoveries]] | 🛳️ [[+ Ship's Log|Ship's Log]] | 📚 [[+ Media Log | Media Log]] 

Summaries of the daily notes go here!

# 📆 This Week

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
Summary
from "Calendar"
SORT file.name desc
LIMIT 7
```

# 🗞 Archive List

### 2022
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
Summary
from "Calendar"
WHERE file.day >= date(2022-01-01) AND file.day <=date(2022-12-31)
SORT file.name desc
````
