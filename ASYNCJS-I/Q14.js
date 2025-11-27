// Synchronous code executes first
console.log("Begin");

// setTimeout goes to the macrotask queue (even with 0ms delay)
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

// Promise.then() goes to the microtask queue
Promise.resolve().then(() => {
  console.log("Promise Task");
});

// Synchronous code continues
console.log("End");

// Execution Order:
// 1. "Begin" - synchronous (call stack)
// 2. "End" - synchronous (call stack)
// 3. "Promise Task" - microtask queue (executes after call stack is empty)
// 4. "Timeout Task" - macrotask queue (executes after microtask queue is empty)