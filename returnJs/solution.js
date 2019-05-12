//is even

function isEven(num){
    //return true if even
    if(num % 2 ===0){
        return true;
    }else{
        //return false if odd
        return false;
    }
}

function isEven2(num){
    return num % 2 === 0;
}



function factorial(num){
    
    var result = 1;
    for(var i = 2; i <=num ; i++){
       result *= i;
    }
    return result;
}


function kebabToSnake(str){ 

    newStr = str.replace(/-/g, "_");
    return newStr


}