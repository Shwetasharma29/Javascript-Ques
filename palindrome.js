// palindrome("abba") === true
// palindrome("shweta") === false
 //solution 1
 const str = 'harshit';
// function palindrome(str){
//     const reverse = str.split('').reverse().join('')
//     return str === reverse;
// }
 //solution 2
 function palindrome(str){
     return str.split('').every((char,i) =>{
         return char === str[str.length-i-1];
     });
        
     }     
 console.log(str);

     
        
