// 1-masala
//function sortArray(arr) {
 // return arr.slice().sort((a, b) => a - b);
//}
//console.log(sortArray([3, 1, 2, 2, 5]));

// 2-masala
//function mostFrequent(arr) {
//  let map = {}, max = 0, res;
  //for (let x of arr) {
  //  map[x] = (map[x] || 0) + 1;
  //  if (map[x] > max) {
  //    max = map[x];
  //    res = x;
  //  }
 // }
  //return res;
//}
//console.log(mostFrequent([1, 2, 2, 3, 2, 4]));

// 3-masala
//function oddMultiply(arr, k) {
 // return arr.map(x => x % 2 !== 0 ? x * k : x);
//}
//console.log(oddMultiply([1, 2, 3, 4], 3));

// 4-masala
//function palindromes(arr) {
//  return arr.filter(w => w === w.split('').reverse().join(''));
//}
//console.log(palindromes(["level", "hello", "madam", "car"]));
// 5-masala
//function twiceWords(text) {
 // let words = text.split(" ");
 // let map = {};
 // words.forEach(w => map[w] = (map[w] || 0) + 1);
 // return words.filter(w => map[w] === 2);
//}
//console.log(twiceWords("olma banan olma nok banan"));

// 6-masala
//function sortByLength(str) {
//  return str.split(" ").sort((a, b) => b.length - a.length);
//}
//console.log(sortByLength("salom men javascript organyapman"));

// 7-masala
//function firstLetters(str) {
 // return str.split(" ").map(w => w[0]).join("");
//}
//console.log(firstLetters("salom men node js"));

// 8-masala
//function squareDigits(str) {
//  return str.replace(/\d/g, d => d * d);
//}
//console.log(squareDigits("a1b2c3"));

// 9-masala
//function vowelWords(text) {
 // return text.split(" ").filter(w => /^[aeiou]/i.test(w));
//}
//console.log(vowelWords("olma banan anor shaftoli"));

// 10-masala
//function increaseDigits(str) {
 // return str.replace(/\d/g, d => Number(d) + 1);
//}
//console.log(increaseDigits("a1b2"));

// 11-masala
//function reverseWords(text) {
 // return text.split(" ")
 //   .map(w => w.split("").reverse().join(""))
 //   .join(" ");
//}
//console.log(reverseWords("salom dunyo"));

// 12-masala
//function sameLengthPairs(text) {
 // let words = text.split(" ");
 // let map = {};
 // words.forEach(w => map[w.length] = (map[w.length] || 0) + 1);
 // let count = 0;
 // for (let k in map) {
  //  if (map[k] > 1) count++;
 // }
 // return count;
//}
//console.log(sameLengthPairs("bir ikki uch tort besh"));

// 1-masala
//let arr = [1, -2, 3, 4, 6];
//let sum = 0;

//for (let i = 0; i < arr.length; i++) {
//  if (arr[i] > 0 && arr[i] % 2 === 0) {
 //   sum += arr[i] * arr[i];
 // }
//}

//console.log(sum);

// 2-masala
//function checkTwoArr(arr1, arr2) {
//  if (arr1.length !== arr2.length) {
  //  console.log(false);
  //  return;
 // }

//  arr1.sort();
 // arr2.sort();

//  for (let i = 0; i < arr1.length; i++) {
  //  if (arr1[i] !== arr2[i]) {
  //    console.log(false);
  //    return;
  //  }
 // }

 // console.log(true);
//}

//checkTwoArr([1, 2, 3, 4], [0, 6])

// 3-masala
//function sortArray(a, b, value) {
 // let arr = a.concat(b);

//  if (value) {
 //   let res = [];
 //   for (let i = 0; i < arr.length; i++) {
 //     res.push(value);
  ///  }
   // console.log(res);
 // } else {
  //  console.log(arr.sort((x, y) => x - y));
  //  console.log(arr.sort((x, y) => y - x));
 // }
//}

//sortArray([1, 10], [2, 3, 4]);
//sortArray([1, 10], [2, 3, 4], "nodejs");

// 4-masala
//function numberSplit(n) {
 // let a = Math.floor(n / 2);
 // let b = n - a;
 // console.log([a, b]);
//}

//numberSplit(11);

// 5-masala
//function sortByLength(arr) {
//  for (let i = 0; i < arr.length; i++) {
  //  for (let j = i + 1; j < arr.length; j++) {
    //  if (arr[i].length > arr[j].length) {
      //  let temp = arr[i];
     //   arr[i] = arr[j];
     //   arr[j] = temp;
    //  }
  //  }
 // }
 // console.log(arr);
//}

//sortByLength(["a", "ccc", "dddd", "bb"]);

// 6-masala
//let nums = [5, 2, 8, 1, 4];
//let res = [];

//for (let i = 0; i < nums.length; i++) {
//  if (nums[i] % 2 === 0) {
  //  res.push(nums[i] * 2);
 // }
//}

//res.sort((a, b) => a - b);
//console.log(res); 

// 7-masala
//function reverseImage(arr) {
  //let res = [];

 // for (let i = arr.length - 1; i >= 0; i--) {
 //   let row = [];
 //   for (let j = arr[i].length - 1; j >= 0; j--) {
   //   row.push(arr[i][j]);
    //}
   // res.push(row);
 // }

//  console.log(res);
//}

//reverseImage([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]);

// 8-masala
//function changeNumberToString(a, b) {
 // let names = ["one", "two", "three", "four", "five"];
 // let res = [];

 // for (let i = a; i <= b; i++) {
 //   res.push(names[i - 1]);
 // }

 // console.log(res);
//}

//changeNumberToString(1, 5);

// 9-masala
//function addToArray(n) {
 // let res = [];
  //let temp = [];

 // for (let i = 1; i <= n; i++) {
   // temp.push(i);

   // if (temp.length === 3) {
   //   res.push(temp);
   //   temp = [];
 //   }
 // }

  //if (temp.length > 0) {
  //  res.push(temp);
 // }

//  console.log(res);
//}

//addToArray(10);
