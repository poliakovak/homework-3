function getGreatestNumber(number1,number2,number3){
    let max = number1;
    if(number2 > max){
        max = number2;
    }
    if(number3 > max){
        max = number3;
    }
    return max;
}
