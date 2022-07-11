/*let i =1;
while(i<=100){
    if((i%3) ==0 && (i%5) == 0){
        console.log ("fizzbuzz");
    }else if((i%3) ==0){
        console.log ("fizz");
    }else if((i%5) ==0){
        console.log ("buzz");
    }
    else{
    console.log(i);
    }
    i++;
} */

//using function in fizzbuzz

var fizzbuzz = [];
var i= 1;
function fizbuz(){
    while(i<=100){
     if((i%3) == 0 && (i%5) == 0){
         fizzbuzz.push("fizzbuzz");
     }else if((i%3) == 0){
         fizzbuzz.push("fizz");
     } else if((i%5) == 0){
         fizzbuzz.push("buzz");
     }else{
         fizzbuzz.push(i);
     }    
     i++;
    }
    console.log(fizzbuzz);
}
fizbuz();   

