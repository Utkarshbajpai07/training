function countdown(number){
    const interval = setInterval(() => {
        console.log(number);
        number--;
        if(number <=2){
            clearInterval(interval);
            console.log("hey bro")
        }
        
    }, 1000);
        
    }
    countdown(10);  

