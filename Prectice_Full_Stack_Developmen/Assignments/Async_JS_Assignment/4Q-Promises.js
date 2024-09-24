function wait(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after " + delay + " milliseconds");
        }, delay);
    });
}

wait(2000).then(console.log);


