---
cssclass: scopePage
obsidianUIMode: preview
tags:
- atlas/Scope🔬 
---

# <-[[Home]] | Cooling pad 🧊

``` dataview
TABLE WITHOUT ID
 file.link as "Encounters and new notes",
 (date(today) - file.cday).day as "Days alive"

FROM "• Encounters" 
  and -"• Encounters/• Highlights" 
  and -"• Encounters/• Antilibrary"
  and -#x/readme

WHERE (date(today) - file.cday).day > 1
SORT file.cday desc
LIMIT 20
```