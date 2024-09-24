function countdown(number){
    const interval = setInterval(() => {
        console.log(number);
        number++;
        if(number >10){
            clearInterval(interval);
            console.log("hey bro")
        }
        
    }, 1000);
        
    }
    countdown(0);

