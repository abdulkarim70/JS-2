// const num =[1,2,3,4,5,6,7,8,9];
// // num.reverse()
// // console.log(num);

// // const rev_num=[];
// for (const n of num ){
//     // console.log(n)
//     rev_num.unshift(n)
// }

// console.log(rev_num);

const num =[1,2,3,4,5,6,7,8,9];
const reverse_num=[];
for(let i=0; i<num.length;i++){
    const n = num[i];
   reverse_num.unshift(n);
   console.log(reverse_num);
   
}
    
//reverse side
const rev_rev_number=[];
for(let i=num.length-1; i>=0; i--
){
    const n =num[i];
    console.log(n);
    rev_rev_number.unshift(n);
    console.log(rev_rev_number);
}