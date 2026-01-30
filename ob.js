let mobile ={
    brand:"Nokia",
    price: 25000,
    weight:"100gm",
    anotherFeature:['less weight', 'less price', 'ultra smart'],
other:{
    name:'abdulkarim',
}
};
// console.log(mobile.weight);/// dot notation
// console.log(mobile.other.name);
for(let k in mobile){
    // console.log(k);
   
}
let value = Object.values(mobile)
let keys =Object.keys(mobile)
// console.log(value.length)
for (i=0; i<keys.length ; i++){

let key = keys[i]
let value = mobile[key] //এখানে কি  এর মান কাজ করছে
console.log(key, ":", value)
}