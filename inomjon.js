
///////////////////  home work/////////////////////


// 1-masala
// function kvadratyigindi(arr){
// let result=0
// for (let i = 0; i < arr.length; i++) {
//     let kv=0
//     if(arr[i]>0 && arr[i]%2===0){
//      kv=arr[i]*arr[i]
//     }
//     result+=kv
// }
// return result
// }
// console.log(kvadratyigindi([1,2,3,4,5,6,7,-8,9]));

// 2-masala
// function checkTwoArr(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1.includes(arr2[i])) {
//             return false
//         } 
//     }
//     return true
// }
// console.log(checkTwoArr([1, 2, 3, 4], [5, 6]));

// 3-masala
// function sortArr(arr1,arr2,str){
// let result=""
// let Arr=[...arr1, ...arr2]
// let sort=Arr.sort((a,b)=> a-b)
// for (let i = 0; i < sort.length; i++) {
//     result+=`"${str}" `
// }
// return result
// }
// console.log(sortArr([1,10],[2,3,4],"nodejs"));

// 4-masala
// function numberSplit(num){
// let Num=Math.floor(num/2)
// let Num1=num-Num
// return [Num,Num1]
// }
// console.log(numberSplit(-9));

// 5-masala
// function sortbyLength(arr){
// let Arr=arr.sort((a,b)=>a.length-b.length)
// return Arr
// }
// console.log(sortbyLength(["a","bbb","c","ccccc","aa"]));

// 6-masala
// function evenSon(arr){
// let result=[]
// let Arr=arr.sort((a,b)=>a-b)
// for (let i = 0; i < Arr.length; i++) {
//     if(Arr[i]%2===0){
//      result.push(Arr[i]*2)
//     }
// }
// return result
// }
// console.log(evenSon([1,4,2,6,9,4,7,3,7,3,8,6,4]));

// 7-masala
// function reverseImege(arr){
// let Result=[]
// for (let i = arr.length-1; i >=0; i--) {
//     let result=[]
//     for (let j = arr[i].length-1; j >=0; j--) {
//         result.push(arr[i][j])
//     }
//     Result.push(result)
// }
// return Result
// }
// console.log(reverseImege([[1,2,3],[4,5,6],[7,8,9]]));

// 8-masala
// function changeNumberToString(num1,num2){
// let obj={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"}
// let result=[]
// for (let i = 1; i <=num2; i++) {
//     if(obj[i]){
//      result.push(obj[i])
//     }
// }
// return result
// }
// console.log(changeNumberToString(1,7));

// 9-masala
// function addToArray(num) {
//   let result = []
//   let temp = []
//   for (let i = 1; i <= num; i++) {
//     temp.push(i)
//     if (temp.length === 3) {
//       result.push(temp)
//       temp = []
//     }
//   }
//   if (temp.length) {
//     result.push(temp)
// }
//   return result
// }
// console.log(addToArray(10));




// qo'shimcha 

// 2-masala
// function toqlarinikopaytirish(arr){
// arr.sort((a,b)=> a-b)
// let enkatta=1
// let hozr=1
// let resalt=arr[0]
// for (let i = 1; i < arr.length; i++) {
//      if(arr[i]===arr[i-1]){
//       hozr++
//      }else{
//         hozr=1
//      }
//      if(hozr>enkatta){
//       enkatta=hozr
//       resalt=arr[i]
//      }
// }
// return resalt
// }
// console.log(toqlarinikopaytirish([1,2,1,3,5,3,5,3,6,3,54,6]));


// 3-masala
// function toqlarinikopaytmasi(arr){
// let result=[]
// let kopaytma=1
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2===0){
//      result.push(arr[i])
//     }else{
//         kopaytma*=arr[i]
//     }
// }
// result.push(kopaytma)
// return result
// }
// console.log(toqlarinikopaytmasi([1,2,3,4,5,6,7,8,9]));

// 6-masala
// function stringuzunlik(str){
// let Arr=str.split(" ")
// let Sort=Arr.sort((a,b)=> b.length-a.length)
// return Sort.join(" ")
// }
// console.log(stringuzunlik("salom hammaga nima gaplar qalaysizlar"));

// 7-masala
// function birinchiharf(str){
// let Arr=str.split(" ")
// let resalt=""
// for (let i = 0; i < Arr.length; i++) {
//     resalt+=Arr[i][0]
// }
// return resalt
// }
// console.log(birinchiharf("salom hammaga nima gaplar qalaysizlar"));

// 10-masala
// function sonlarnioshirish(str){
// let newstr=""
// for (let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])){
//      newstr+=Number(str[i])+1
//     }else{
//         newstr+=str[i]
//     }
// }
// return newstr
// }
// console.log(sonlarnioshirish("a1b2"));
