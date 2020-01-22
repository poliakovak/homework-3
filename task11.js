let str = "";
for(let i = 1; i <= 8; i++){
    for(let j = 1; j <=4; j++){
        if(i%2 !== 0){
            str += "#";
            str += " ";
        }
        else{
            str += " ";
            str += "#";
        }
    }
    str += "\n";
}

console.log(str);