function matrix(n) {
    const result= [];
    for(let i = 0; i<n; i++){
        result.push([]);
    }
let counter = 1;
let startcolumn =0;
let endcolumn = n-1;
let startrow = 0;
let endrow = n-1;
while(startcolumn <= endcolumn && startrow <= endrow){
    //top row
    for(let i = startcolumn; i<=endcolumn; i++){
        result[endcolumn][i] = counter;
        counter++;
    }
    startrow++;

    //right colunmn
    for(let i = startrow; i<=endrow; i++){
        result[endrow][i]= counter;
        counter++;
    }
    endcolumn--;

    //bottom row
    for(let i=endcolumn; i>=startcolumn; i-- ){
        result[endrow][i] = counter;
        counter++;
        }
        endrow--;

     //start column
     for(let i = endrow; i>= startrow; i--){
         result[i][startcolumn] = counter;
         counter++;
     }
     startcolumn++;
    }    
    return result;
}


