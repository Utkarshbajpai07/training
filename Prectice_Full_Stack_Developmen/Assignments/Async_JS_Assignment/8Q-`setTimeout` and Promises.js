function randomDelayMessage(message) {
  const delay = Math.floor(Math.random() * 4001) + 500; 

    return new Promise(resolve => setTimeout(resolve, delay))
    .then(() => console.log("Random  ",message,delay));
}





randomDelayMessage("First message", 1000);

randomDelayMessage("Second message", 2000);

randomDelayMessage("Third message", 3000);

randomDelayMessage("fourth message", 4000);

randomDelayMessage("Fifth message", 5000);

