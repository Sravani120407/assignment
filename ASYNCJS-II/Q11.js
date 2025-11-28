function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}
function getUserInput(callback) {
  console.log("Fetching username...");
  setTimeout(() => {
    const username = "Alice";
    console.log("Username retrieved!");
    callback(username);
  }, 1000);
}
console.log("Program started");
getUserInput(displayMessage);
console.log("Waiting for username...");