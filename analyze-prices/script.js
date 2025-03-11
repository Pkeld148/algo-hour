// Write a function named analyzePrices that takes in an array of whole number prices, and returns an object with buyIndex and sellIndex that represent array indexes at which one should buy and sell to achieve maximum net profit for the input array. The indexes of the price array are times, and you can’t sell before you buy. If there is not a buy/sell pair that would make a profit, the function should return null for both indexes. Examples:
// var prices = [1,2,3,4,5,6,7,8,9,0]; analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 8 }

// I AM VERY DUMB AND THIS "SOLUTION" DOESN'T REALLY WORK FOR CERTAIN CASES, LIKE THE ABOVE EXAMPLE WHERE THE LAST INDEX IS LOWEST
function analyzePrices(prices) {
  // Maybe make a variable for profit?  Then can check that to return null?
  // We need to find the lowest value, and the highest value?
  // Probably want to loop through the array for that

  let buyIndex = 0;
  let buyPrice = prices[0];
  let sellIndex = 0;
  let sellPrice = 0;
  let profit = 0;

  // Find the lowest value for the buyPrice/Index FIRST
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      buyIndex = i;
    }
  }

  // Find the highest value for the sellPrice/Index NEXT
  for (let i = buyIndex; i < prices.length; i++) {
    if (prices[i] > sellPrice) {
      sellPrice = prices[i];
      sellIndex = i;
    }
  }

  if (buyIndex === 0 && sellIndex === 0) {
    buyIndex = null;
    sellIndex = null;
  }

  console.log({ buyIndex, sellIndex });
}


// Tests
prices = [8, 4, 3, 1, 5, 5, 2, 8, 2, 3];
analyzePrices(prices); // returns { buyIndex: 3, sellIndex: 7 }
prices = [5, 2, 5, 4, 5, 6, 3, 8, 1, 8];
analyzePrices(prices); // returns { buyIndex: 8, sellIndex: 9 }
prices = [1, 1, 1, 1, 1];
analyzePrices(prices); // returns { buyIndex: null, sellIndex: null}
// So yea, the code I showed in class will cover the above tests, but doesn't work for the tests below.  Code is bad.  I'm bad.  Sorry

// Tricky Tests
// What if the lowest value is at the end?
prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 8 }
// What if the biggest profit doesn't include the lowest number?
prices = [2, 9, 1, 6, 4, 4, 4, 4];
analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 1 }
