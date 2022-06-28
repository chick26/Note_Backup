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
<div class="title" style="color:#fff">HOME</div>

This is the Table of Contents of My Box. **ALL SHOULD BE REVIEW IN TIME**

# PERSONAL OBJECT
- 🏈 Sunday Game
	- [[Spicy-Sweet Buffalo Popcorn]]
	- [[Guest list]]
	- [Jalapeno Popper Wantons](https://www.allrecipes.com/recipe/166991/jalapeno-popper-wontons/)
- 👨‍👩‍👦 Objectives
	- [[Family Recipes]]
	- [[Family Calendar]]
	- [[Education Plan]]
	- [[Yearly Budget]]
- 🌅 Exotic Vacations 
	- [[Peru]]
	- [[Austria]]
	- [[Texas]]  
- 🎥 Movies to Watch
	- [Sleepless in Seattle](https://www.imdb.com/title/tt0108160/)
	- [Joe vs the Volcano](https://www.imdb.com/title/tt0099892/)

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

