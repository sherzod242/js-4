let num = 5
let str = ''

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    str += '-'
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    str += '#'
  }

  console.log(str);
  str = ''
}
let num1 = 4
let str1 = ''

for (let i = 0; i < num1; i++) {
  for (let j = -1; j < num1 * i / 4; j++) {
    str1 += '-'
  }
  for (let j = -6.5; j < i / 2 * -4; j++) {
    str1 += '#'
  }

  console.log(str1);
  str1 = ''
}