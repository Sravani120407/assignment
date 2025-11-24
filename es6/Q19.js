// 1(a)
console.log(`"5 + 7 = ${5 + 7}"`);

// 1(b)
const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// 1(c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// 2(a)
const square = n => n * n;
console.log("square(5) =", square(5));

// 2(b)
const objArrow = {
  value: 50,
  test: () => console.log(this?.value)
};
objArrow.test();

// 2(c)
const objNormal = {
  value: 50,
  test() { console.log(this.value); }
};
objNormal.test();


// 3(a)
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);

// 3(b)
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// 3(c)
function maxValue(...nums) {
  if (nums.length === 0) return -Infinity;
  return Math.max(...nums);
}
console.log(maxValue(3, 7, 2, 9));


// 4(a)
const arr = [10, 20, 30];
const [aVal, bVal] = arr;
console.log(aVal, bVal);

// 4(b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// 4(c)
const info = {};
console.log(info?.user?.contact?.phone);


// 5(a)
for (var i = 0; i < 3; i++) {}
console.log(i);

// 5(b)
for (let j = 0; j < 3; j++) {}
try { console.log(j); } catch (err) { console.log(err.name); }

// 5(c)
/*
 const is used because it prevents reassignment 
 of the variable, ensuring the value remains unchanged.
*/

// 6(a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// 6(b)
const age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// 6(c)
const num = -5;
const sign = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(sign);


// 7(a)
const nums = [1, 2, 3];
const numsWith45 = [...nums, 4, 5];
console.log(numsWith45);

// 7(b)
const arrA = ["x", "y"];
const arrB = ["z"];
const combinedArr = [...arrA, ...arrB];
console.log(combinedArr);

// 7(c)
function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C"));


// 8(a)
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);

// 8(b)
const idVar = 101;
const role = "admin";
const userShorthand = { id: idVar, role };
const userShorthand2 = { idVar, role };
console.log(userShorthand);
console.log(userShorthand2);

// 8(c)
const name = "Alice";
const person = {
  name,
  greet() { return `Hi, I'm ${this.name}`; }
};
console.log(person.greet());

// 9(a)
console.log(`Today's date is: ${new Date().toDateString()}`);

// 9(b)
const name9 = "NAME";
const score9 = 80;
console.log(`Hello ${name9}, your score is ${score9}/100`);


// 10(a)
const add = (a, b) => a + b;
console.log(add(5, 7));

// 10(b)
const isAdult = age => age >= 18;
console.log(isAdult(20));

// 10(c)
const double = n => n * 2;
console.log(double(6));


// 11(a)
const arr11 = [1, 2, 3];
const clone11 = [...arr11];
console.log(clone11);

// 11(b)
const arrBeg = [100, ...arr11];
console.log(arrBeg);

// 11(c)
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 99, z: 3 };
const merged11 = { ...obj1, ...obj2 };
console.log(merged11);


// 12(a)
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);

// 12(b)
console.log(user?.job?.title);

// 12(c)
const data = {
  info: {
    profile: null
  }
};
console.log(data?.info?.profile?.email);

