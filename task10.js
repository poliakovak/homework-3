function range(start,end){
    let result = [];
    for(let i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}


function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function getRange(start,end,step){
    let result = [];
    if(step === undefined){
        step = 1;
    }
    if(step >= 1){
    for(let i = start; i <= end; i = i + step){
        result.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i = i + step){
            result.push(i);
        }
    }
    return result;
}

