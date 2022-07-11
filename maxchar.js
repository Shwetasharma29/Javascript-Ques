//solution
function max(str){
    const charMap ={};
    let max =0;
    let maxchar ='';
    for(let i of str){
        charMap[i] = charMap[i] + 1 || 1;
    }
    for(let i in charMap){
        if (charMap[i]>max) {
          max= charMap[i];
          maxchar= i;            
        }
    }
    return maxchar;
}
var result = max('hellooooo world');
console.log(result);

