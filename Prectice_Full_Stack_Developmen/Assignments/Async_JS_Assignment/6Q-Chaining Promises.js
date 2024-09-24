function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function delayedLogSequence(messages) {
    let promise = Promise.resolve();

    messages.forEach(([message, delay]) => {
        promise = promise.then(() => {
            console.log(message);
            return wait(delay); 
        });
    });

    return promise; 
}
const messages = [
    ["First message", 1000],   
    ["Second message", 2000],  
    ["Third message", 1500]    
];

delayedLogSequence(messages).then(() => {
    console.log('All messages have been logged in sequence!');
});



