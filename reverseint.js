//solution 1
function reverseanumber(n){
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseanumber("12345")); 
//solution 2
const int = "12345" ;
let newint = "" ;
for(let i=int.length - 1; i>=0; i--){
    newint +=int[i];
}
console.log(newint);

