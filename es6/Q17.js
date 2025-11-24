// a) Spread operator - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
// b) Rest operator - sum all numbers
const sum = (...nums) => nums.reduce((total, num) => total + num, 0);
// c) Multi-level destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;
