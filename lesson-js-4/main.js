// функции
// деклорационные
// console.log(summ());
// function summ(a=2,b=2) {
//   let res = a + b
//   return res
// }
// console.log(summ(10, 5))
// console.log(summ(22, 575))
// console.log(summ())
// экспресионные
// console.log(summ2());
// let summ2 = function(a=2,b=2){
//   let res = a + b
//   return res
// }
// console.log(summ2());
// анонимные
// (function(e){
//   console.log(e);
// }(10))


// рекурсионые
// function test(i){
//   console.log(i);
//   i++
//   if(i < 10){
//     test(i)
//   }
// }
// test(0)

// пользователь вводит число ему на это число должно высчитаться факториал
// нужно написать рекурсионную функцию для вычесления
// написать через цикл
// 0 = 1
// 5 = 1 * 1 * 2 * 3 * 4 * 5 = 1 2 6 24 120
let num = Number(prompt('Введите число'))
let result = 1
// ================================
function factorial(num, i){
  if(num == 0){
    console.log(result);
  }else{
    result = result * i
    i++
    console.log(result);
    if(num >= i){
      factorial(num, i)
    }
  }  
}
factorial(num, 1)
// ==================================
function test(n){
  if(n != 1) {return n * test(n - 1)} // 5 * 4 * 3 * 2 * 1 = 120
  else{return 1}
}
console.log(test(num))
// ===================================
result = 1
if(num == 0){
  console.log(result);
}else{
  for(let i = 1; i <= num; i++){
    result = result * i
    console.log(result);
  }
}

// задание 
// найти сумму всех чисел последовательно и после найти средне арефметическое этих чисел
// 1+2+3+4+5 = 15 / 5 = 3