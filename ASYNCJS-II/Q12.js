function timer(duration, onComplete) {
  console.log(`Timer started for ${duration} ms`);
  
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

console.log("Program started");

timer(2000, (message) => {
  console.log(message);
});

timer(3000, (message) => {
  console.log(message);
});

console.log("Timers are running...");