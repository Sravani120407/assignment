let age = 25;

function displayAge() {
  console.log("Current age:", age);
}

console.log("=== Demonstrating Global Execution Context ===");
displayAge();

function changeAge(newAge) {
  age = newAge;
  console.log("Age updated to:", age);
}

console.log("\n=== Demonstrating Function Execution Context ===");
console.log("Initial age:", age);

changeAge(30);

console.log("\nAfter calling changeAge:");
displayAge();

console.log("\n=== Verifying Global Variable Update ===");
console.log("Global age variable:", age);