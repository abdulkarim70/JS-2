const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let revColor=[];
for(let i=0; i<colors.length;i++){
    let color=colors[i]
    revColor.unshift(color)
}
console.log(revColor)