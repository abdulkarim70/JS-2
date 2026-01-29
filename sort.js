const person =['rakib', 'sakib','makib', 'akib'];
const sortedPerson = person.sort()
console.log(sortedPerson);

// const number =[2,5,3,8,4];
// const shortedNumber = number.sort(); //sort accending smaller to larger
// console.log(shortedNumber);
// const sort
const number =[2,5,3,8,4, 12, 43];
const number_asc= number.sort(function(a,b) {return a-b}); // this is accending if array number mor than 10
const number_dsc= number.sort(function(a,b) {return b-a}); // thi is decending if array number more than 10
console.log(number_asc);
console.log(number_dsc);