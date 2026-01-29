/// split method very for reverse a string
let str1='We Love Programing';
let strArray= str1.split(' L');
// console.log(strArray);
let reverseStrArray=strArray.reverse();
// console.log(reverseStrArray);
let str3 ='I love my Mother';
let str3Array= str3.split(" ");// split work for string to array convert
console.log(str3Array);
let reverseStr= str3Array.reverse();
// console.log(reverseStr);
let joinStr= reverseStr.join(" "); //join work for array to srting convert
console.log(joinStr);