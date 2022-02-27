<%*
let input = await tp.system.prompt("输入标题：")
titleName = input
await tp.file.rename(titleName)
-%>

---
title: <% titleName %>
creation date: <% tp.file.creation_date() %> 
tags:
- <%tp.file.cursor(1)%>
---