// count a specific letter 
let string ='We Love To Travel';
let tCount=0;
for(let i=0; i<string.length;i++){
let letter = string[i];
   
if(letter.toLowerCase()=='t'){
    tCount++;
}

}
console.log(tCount);