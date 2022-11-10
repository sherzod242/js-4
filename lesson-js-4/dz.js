/* 
----#
---###
--#####
-#######
#########
*/
let num = 5
let str = ''

for(let i = 0; i < num; i++){
  for(let j = 0; j < num - i - 1; j++){
    str += '-'
  }
  for(let j = 0; j < i * 2 + 1; j++){
    str += '#'
  }
  for(let j = 0; j < num - i - 1; j++){
    str += '-'
  }
  console.log(str);
  str = ''
}