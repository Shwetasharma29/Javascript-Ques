function vowels(str) { 
    let count = 0  
    const checker = ['a','e','i','o','u']   
    for (let char of str) {  
         if(checker.includes(char)){    
    
            count++                                                
         }                   
    } 
    return count                    
} 
  
// count the number of vowels using regex               
 /*function countvowels(str) {  
     const count = str.match(/[aeiou]/gi).length;            
     return count;        
 }   
 const string = prompt('enter a string: ');      
 const result = countvowels(string);            
 console.log(result); */              
  /*function vowels(str) {     
      let count= 0   
      const checker =['a','e','i','o','u']
      for (let char of str) {  
         if (checker.includes(char)) {
             count++  
         }          
      }    
      return count
  }*/