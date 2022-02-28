<%*
let input = await tp.system.prompt("输入书名：")
titleName = input
await tp.file.rename(titleName)
-%>

---
started on: <% tp.file.creation_date() %> 
completed on:
aliases: 
- Book: 
- Writer: 
tags: 
- booktype/
- bookgenre/ 
- booktheme/
---