function wait(delay){
    return new Promise(resolve => setTimeout(resolve, delay));

}

function countdown(number) {
    return new Promise(async (resolve) => {
        while (number >= 0) {
            console.log(number);
            number--;
            if (number >= 0) {
                await wait(1000); 
            }
        }
        console.log('Countdown finished!');
        resolve();  
    });
}

countdown(5).then(() => {
    console.log('Countdown completed, and the promise is resolved!');
});
