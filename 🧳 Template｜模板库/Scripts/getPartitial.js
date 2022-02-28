import Utils from './utils'

export default ({tp, data: partial}) => {
  console.log('Utils', Utils)
  tp.file.find_tfile(`${Utils.partialsPath}${partial}.md`)
}