function getLeastNumber(num1,num2,num3,num4,num5){
    let min = num1;
    if(num2 < min){
        min = num2;
    }
    if(num3 < min){
        min = num3;
    }
    if(num4 < min){
        min = num4;
    }
    if (num5 < min){
        min = num5;
    }
    return min;
}
