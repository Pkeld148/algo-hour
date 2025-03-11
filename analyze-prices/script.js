// Write a function named analyzePrices that takes in an array of whole number prices, and returns an object with buyIndex and sellIndex that represent array indexes at which one should buy and sell to achieve maximum net profit for the input array. The indexes of the price array are times, and you can’t sell before you buy. If there is not a buy/sell pair that would make a profit, the function should return null for both indexes. Examples:
// var prices = [1,2,3,4,5,6,7,8,9,0]; analyzePrices(prices); //returns { buyIndex: 0, sellIndex: 8 }

function analyzePrices(prices) {

}




prices = [8,4,3,1,5,5,2,8,2,3]; analyzePrices(prices); // returns { buyIndex: 3, sellIndex: 7 }
prices = [5,2,5,4,5,6,3,8,1,8]; analyzePrices(prices); // returns { buyIndex: 8, sellIndex: 9 }
prices = [1,1,1,1,1]; analyzePrices(prices); // returns { buyIndex: null, sellIndex: null}