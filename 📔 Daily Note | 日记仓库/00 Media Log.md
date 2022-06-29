---
title: Media Log
creation date: 2022-03-01 21:51 
cssclass: homePage
obsidianUIMode: preview
banner: "![[shelf.jpg]]"
---
<div class="title" style="color:#fff">Media Log</div>
<- [[01 Daily Notes Hub | Daily Notes Hub]] | 💡 [[00 New Discoveries Log | New Discoveries]] | 🛳️ [[00 Ship's Log|Ship's Log]] 

Media Log contains mini-reviews on the books/articles I read and the videos I watch.

# 🎧 Listening Log

```dataview
table ListeningLog as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(ListeningLog, "")
```

# 📖 Reading Log

```dataview
table ReadingLog as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(ReadingLog, "")
```

# 📸 Photographing Log

```dataview
table PhotographingLog as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(PhotographingLog, "")
```

# 🎬 Video Log

```dataview
table VideoLog as "Log"
from "📔 Daily Note | 日记仓库/Note Repo"
where contains(VideoLog, "")
```