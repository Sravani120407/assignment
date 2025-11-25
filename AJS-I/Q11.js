function processProducts(products) {
  //1.map() - extract product names
  const productNames = products.map(product => product.name);
  
  //2.forEach() - log messages based on price
  productNames.forEach((name, index) => {
    const price = products[index].price;
    
    if (price > 50) {
      console.log(`${name} is above $50`);
    } else {
      console.log(`${name} is below $50`);
    }
  });
}
//Example
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(products);