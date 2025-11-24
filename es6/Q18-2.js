// (b) Optional Chaining Example
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  
// (c) Example where optional chaining prevents runtime error
const student = {
  name: "Rahul",
  address: {
    city: "Hyderabad"
  }
};
console.log(student.address?.pincode?.code); 
