---
title: Media Log
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[shelf.jpg]]"
---
<div class="title" style="color:#fff">Media Log</div>

<- [[+ Index for Calendar | Daily Notes Hub]] | 💡 [[+ New Discoveries Log | New Discoveries]]  | 🛳️ [[+ Ship's Log|Ship's Log]] 

Media Log contains mini-reviews on the books/articles I read and the videos I watch.

# 🎧 Listening Log
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
ListeningLog as "Log"
from "Calendar"
where contains(ListeningLog, "")
```

# 📖 Reading Log
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
ReadingLog as "Log"
from "Calendar"
where contains(ReadingLog, "")
```

# 📸 Photographing Log
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
PhotographingLog as "Log"
from "Calendar"
where contains(PhotographingLog, "")
```

# 🎬 Video Log
```dataview
TABLE WITHOUT ID 
("[[" + file.name + "]]") AS Entries,
VideoLog as "Log"
from "Calendar"
where contains(VideoLog, "")
```