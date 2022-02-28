<%*

let input = await tp.system.prompt("输入标题：")
let templateName = tp.file.find_tfile("Learning-Note")
let titleName =  input
tp.file.create_new(templateName, titleName , false)

-%>