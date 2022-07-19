---
title: New Discoveries Log
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[discovery.jpg]]"
---
<div class="title" style="color:#fff">New Discoveries Log</div>

<- [[+ Index for Calendar | Daily Notes Hub]] | 🛳️ [[+ Ship's Log|Ship's Log]] | 📚 [[+ Media Log | Media Log]]

A log containing the interesting discoveries from the Daily Notes.

# List

```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
NewDiscovery as "Log"
from "Calendar"
where contains(NewDiscovery, "")
```