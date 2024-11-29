function prime(num){
    if(num<=1){
        console.log("Not prime");
        return;
    }
    for(i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            console.log("Not prime");
            return;
        }
    }
    console.log("Prime");
}

prime(7);