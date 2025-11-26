// 1: Closure-Based Counter Implementation
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
    },
    getCount: function() {
      return count;
    }
  };
}
console.log("=== Counter Demo ===");
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log("\n=== Multiple Counters ===");
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
counter1.increment();
console.log("Counter1:", counter1.getCount());
counter2.increment();
console.log("Counter2:", counter2.getCount());
console.log("\n=== Closure Explanation ===");
console.log("Each counter has its own private 'count' variable");
console.log("The count variable is encapsulated and not directly accessible");
console.log("Trying to access counter.count:", counter.count);

// Question 2: Bank Account Implementation
function createBankAccount() {
  let balance = 0;
  let transactionHistory = []; 
  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push({ type: 'deposit', amount: amount, balance: balance });
      console.log("Deposited:", amount);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push({ type: 'withdraw', amount: amount, balance: balance });
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance: function() {
      return balance;
    },
    getTransactionHistory: function() {
      return transactionHistory;
    }
  };
}
console.log("\n\n=== Bank Account Demo ===");
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log("Final balance:", account.getBalance());
console.log("Trying to access account.balance:", account.balance);
console.log("\n=== Transaction History ===");
console.log(account.getTransactionHistory());
console.log("\n=== Closure Privacy Explanation ===");
console.log("The 'balance' variable is private and cannot be accessed directly");
console.log("Only the returned methods can access and modify the balance");
console.log("This prevents unauthorized modifications to the account balance");