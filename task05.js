function getLastOdd(number){
    let result = 0;
    while(number > 0){
        let newNumber = number%10;
        number = (number - newNumber)/10;
        if(newNumber%2 !== 0){
            result = newNumber;
            break;
        }
    }
    return result;
}
