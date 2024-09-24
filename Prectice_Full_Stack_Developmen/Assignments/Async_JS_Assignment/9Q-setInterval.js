function repeatAction(action, interval, duration) {
    let timeout;

    return new Promise((resolve) => {
        timeout = setInterval(() => {
            action();

            if (Date.now() >= duration) {
                clearInterval(timeout);
                resolve();
            }
        }, interval);
    });
}
async function doSomething() {
    console.log("Starting action...");

    await repeatAction(() => console.log("Doing something..."), 1000, 5000);

    console.log("Action finished.");
}

doSomething();
