function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function sortCategoriesByCount(categories) {
  const counts = countCategories(categories);
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}
//sample data
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
console.log(sortCategoriesByCount(input));