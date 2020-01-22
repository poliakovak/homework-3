function getMaxEven(number){
    let array = [];
    while(number > 0){
        let newNumber = number%10;
        number = (number - newNumber)/10;
        if(newNumber%2 === 0){
            array.push(newNumber);
        }
    }
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > array[i-1]){
            max = array[i];
        }
    }
    return max;
}
