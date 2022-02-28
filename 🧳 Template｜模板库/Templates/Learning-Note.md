<%*

const input = await tp.system.prompt("输入标题：")
const template = tp.user.getPartial({tp, data: 'Learning-Note'})
const titleName = input
tp.file.create_new(templateName, titleName , false)

-%>