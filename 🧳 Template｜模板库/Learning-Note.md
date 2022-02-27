<%*
let input = await tp.system.prompt("输入标题：")
let templateName = tp.file.find_tfile("🛖 Learning Repo｜学习仓库")
let titleName = input
-%>

---
title: <% tp.file.title %>
creation date: <% tp.file.creation_date() %> 
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
tags:
- <%tp.file.cursor(1)%>
---