let kar =' Abdul Karim';
let kar2 ='abdul Karim';
// console.log(kar.toLowerCase()===kar2.toLowerCase()); ///not work if any space

///Convert string
console.log(kar.toLowerCase().trim()===kar2.toLowerCase().trim()); // space remove from beginig and end.

let bd ="Bangladesh my love";
console.log(bd.includes ('Bangladesh my love')); //puro porson check kore


let str ='We Love Bangladesh';
let newStr=str.replace('We','I');/// to replace specic porson
console.log(newStr);
