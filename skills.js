function calculateNumbers(var1,var2){
    return var1 + var2;
}

function divideNumbers(var1,var2){
    if(var2 === 0){
        throw new Error('Cannot divide by 0');
    }
    
    return var1 / var2;
}