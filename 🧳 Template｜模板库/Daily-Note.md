
<%*

let today = tp.date.now("YYYY-MM-DD")
let inputDate = await tp.system.prompt("输入示例："+today,today)
titleName = window.moment(inputDate, "YYYY-MM-DD", true).format("YYYY-MM-DD_ddd")
before_date = window.moment(inputDate, "YYYY-MM-DD", true).add(-1,"days").format("YYYY-MM-DD_ddd")
after_date = window.moment(inputDate, "YYYY-MM-DD", true).add(1,"days").format("YYYY-MM-DD_ddd")
let createTime = tp.file.creation_date()
let modificationDate = tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")

-%>
📆 [[{{date:MMM. Do. YYYY}}]]
___

## Objectives
- [ ] obj 1

## All Tasks
- [ ] task 1

## Reminders
-

### Lingering Feelings, Observations, Thoughts
-

### Reflection
-

### Today's Notes
-