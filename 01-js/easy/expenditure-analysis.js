/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result= [];
  let myMap = new Map();
  for(let i=0;i<transactions.length;i++){
    if(myMap.has(transactions[i].category)){
        let total= myMap.get(transactions[i].category)
        myMap.set(transactions[i].category, transactions[i].price + total);
    }else{
      myMap.set(transactions[i].category, transactions[i].price);
    }
  }
  for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
    result.push({category : key, totalSpent: value});
}
  return result;
}

module.exports = calculateTotalSpentByCategory;
