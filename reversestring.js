//solution
   const str= 'the quick brown fox.';
    const newstr = str 
                  .split('')
                  .reverse()
                  .join('');

    console.log(newstr);            
//solution 2
const str = 'the quick brown box';
let newstr = '';
for (let i = str.length - 1; i>=0; i--){
    newstr +=str[i]; //or newstring = newstring + str[i];
}
console.log(newstr);
