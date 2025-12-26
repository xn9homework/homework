// 1 masala

// function calc(arr) {
//   let sum = 0;
//   arr.map(n => Math.abs(n))
//      .forEach(n => {
//        if (n % 2 === 0) sum += n * n;
//      });
//   return sum;
// }

// console.log(calc([-1, 2, -3, 4]));

// 2 masala

// function checkTwoArr(arr1, arr2) {
//   return arr1.every(el => arr2.includes(el)) ||
//          arr2.every(el => arr1.includes(el));
// }

// console.log(checkTwoArr([1,2,3,4],[0,6]));
// console.log(checkTwoArr([3,1],[4,0]));
// console.log(checkTwoArr([9,9,8],[8,9]));
// console.log(checkTwoArr([1,2,3,4],[2,3]));

// 3 masala

// function sortArray(arr1, arr2, str) {
//   const merged = [...arr1, ...arr2].sort((a,b)=>a-b);
//   return [
//     merged,
//     [...merged].reverse(),
//     Array(merged.length).fill(str)
//   ];
// }

// console.log(sortArray([1,10],[2,3,4],'nodejs'));

// 4 masala

// function numberSplit(n) {
//   const a = Math.floor(n / 2);
//   return [a, n - a];
// }

// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9));

// 5 masala

// function sortByLength(arr) {
//   return arr.sort((a,b)=>a.length-b.length);
// }

// console.log(sortByLength(["a","ccc","dddd","bb"]));

// 6 masala

// function evenDouble(arr){
//   return arr.filter(n=>n%2===0)
//             .sort((a,b)=>a-b)
//             .map(n=>n*2);
// }

// console.log(evenDouble([5,2,8,1,4]));

// 7 masala

// function reverseImage(matrix){
//   return matrix.map(row => [...row].reverse()).reverse();
// }

// console.log(reverseImage([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]));

// 8 masala
// function changeNumberToString(a,b){
//   const words = ['one','two','three','four','five'];
//   return [
//     words,
//     [words[b-1], words[3], words[a-1], words[2], words[1]]
//   ];
// }

// console.log(changeNumberToString(1,5));

// 9 masala
// function addToArray(n){
//   const arr = Array.from({length:n},(_,i)=>i+1);
//   let res = [];
//   let temp = [...arr];

//   while(temp.length) res.push(temp.splice(0,3));
//   return [arr, res];
// }

// console.log(addToArray(10));