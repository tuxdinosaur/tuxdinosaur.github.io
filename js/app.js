
/* COLORS 
  - #C72B6C
  - #FF3864
  - #3581B8
  - #B6244F
  - #7C77B9
  - #9D8189
  - #D65780
  - #9792E3
  - #FBAF00
  - #DB5461
  - #7E7F9A
  - #BA2C73
  - #1B998B
  - #119DA4
  - #EF798A
*/

var arrColors = ["#333333", "#1B998B"]
var numColor = Math.random()*2
console.log(numColor)

let floorNumColor = Math.floor(numColor)
console.log(floorNumColor)
console.log(arrColors[floorNumColor])
