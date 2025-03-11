// Write a function named analyzePrices that takes in an array of whole number prices, and returns an object with buyIndex and sellIndex that represent array indexes at which one should buy and sell to achieve maximum net profit for the input array. The indexes of the price array are times, and you can’t sell before you buy. If there is not a buy/sell pair that would make a profit, the function should return null for both indexes. Examples:
// var prices = [1,2,3,4,5,6,7,8,9,0]; analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 8 }

function analyzePrices(prices) {
  // We need a variable to track what our maximum profit is at any given time.
  let maxProfit = 0;
  // Setting the buyIndex to -1 is kind of an easy way to handle the edge case of if no profit is possible.  If buyIndex is still -1 at the end, then just set both indexes to null.
  let buyIndex = -1;
  let sellIndex = 0;

  // We'll use a loop inside of a loop.  The first loop, using the i variable, is essentially searching for our buy price.
  // The second loop, using the j variable, is essentially searching for the sell price.
  // Also, doing it this way ensures that the sell price occurs AFTER the buy price.
  // Yes, a loop inside of a loop is VERY inefficient with regards to big O notation, but is pretty much unavoidable for this specific problem.
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let currentProfit = prices[j] - prices[i];
        if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
          buyIndex = i;
          sellIndex = j;
        }
      }
    }
  }
  // So each time we iterate through, we want to check what the profit at that point in time is.
  // Then we check if the profit at that specific moment is greater than any previous interation.
  // If we have a new higher profit amount, then we re-assign that profit number
  // And most importantly we store what the buy and sell indexes are.

  // Checking if the buyIndex is still -1.  If it is, then that means that no profit is possible.
  // Set both indexes to null according to the instructions.
  if (buyIndex === -1) {
    buyIndex = null;
    sellIndex = null;
  }
  // Finally, console log the object of buy and sell indexes.
  console.log({ buyIndex, sellIndex });
}

// Tests
prices = [8, 4, 3, 1, 5, 5, 2, 8, 2, 3];
analyzePrices(prices); // returns { buyIndex: 3, sellIndex: 7 }
prices = [5, 2, 5, 4, 5, 6, 3, 8, 1, 8];
analyzePrices(prices); // returns { buyIndex: 8, sellIndex: 9 }
prices = [1, 1, 1, 1, 1];
analyzePrices(prices); // returns { buyIndex: null, sellIndex: null}

// Tricky Tests
// What if the lowest value is at the end?
prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 8 }
// What if the biggest profit doesn't include the lowest number?
prices = [2, 9, 1, 6, 4, 4, 4, 4];
analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 1 }
