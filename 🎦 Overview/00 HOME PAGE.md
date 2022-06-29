---
title: Learning Note OverView
creation date: 2022-03-01 21:51 
cssclass: homePage
tags:
banner: "![[宁静.JPG]]"
banner_x: 0.5
banner_y: 0.85
banner_lock: true
obsidianUIMode: preview
---
<div class="title" style="color:#fff">HOME</div>


# 🗂 PERSONAL OBJECT

-  📲 Front Dev

	 `$=dv.list(dv.pages('"🛖 Learning Repo｜学习仓库/📲 Front Dev｜前端开发"').sort(f=>f.file.mtime.ts,"desc").limit(5).map(f => "[[" + f.file.name + "]]"))`

- 💵 CFA
 
	 `$=dv.list(dv.pages('"🛖 Learning Repo｜学习仓库/💵 CFA | 金融分析师"').sort(f=>f.file.mtime.ts,"desc").limit(5).map(f => "[[" + f.file.name + "]]"))`

- 📉 Data Structrue

	`$=dv.list(dv.pages('"🛖 Learning Repo｜学习仓库/📉 Data Structrue｜数据结构"').sort(f=>f.file.mtime.ts,"desc").limit(5).map(f => "[[" + f.file.name + "]]"))`

# 〽️ STATS

 📌   **TOTAL**: `$=dv.pages().length` 
 📌   **INBOX**: `$=dv.pages('"🛖 Learning Repo｜学习仓库/🗄 Avatar | 待分类"').length`
 📌   **LEARN NOTE**: `$=dv.pages('"🛖 Learning Repo｜学习仓库"').length - dv.pages('"🛖 Learning Repo｜学习仓库/🗄 Avatar | 待分类"').length`
 📌   **READ NOTE**: `$=dv.pages('"📓 Reading | 读书笔记"').length`
 📌   **[[01 Daily Notes Hub|DAILY]]**: `$=dv.pages('"📔 Daily Note | 日记仓库/Note Repo"').length`

# 📝 DAILY NOTE

```dataviewjs
moment.locale('en')
function isWithinWeek(page) {	
	
	let filemoment = moment(page.file.name, 'YYYY-MM-DD')
	let today = moment().startOf('day');
	let tomorrow = today.clone().add(1, 'days').startOf('day');
	let weekago = today.clone().subtract(7, 'days').startOf('day');

	// if in this week and summary exists
	if (filemoment.isAfter(weekago) && filemoment.isBefore(tomorrow)) { 
		if (page.Summary) { 
			return true; 
		} 
	}
	else return false;
 }


dv.table(["Date","Summary"], 
	 dv.pages('"📔 Daily Note | 日记仓库/Note Repo"')
		.filter(isWithinWeek)
		.sort(b => b.file.name,'desc')
		.map(b =>[dv.fileLink(b.file.name, false, moment(b.file.name,'YYYY-MM-DD').format("ddd")),"<span id='summary1'>"+b.Summary+"</span>"])
	)
```


# 📑 WAITING LIST

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

# 📝 DOING LIST

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

# 📨 REVIEW LIST

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

