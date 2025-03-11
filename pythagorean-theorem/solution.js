// Use the Pythagorean Theorem to create a function getHypotenuseLength that uses parameters a and b to calculate the length of the hypotenuse of a right triangle. If a or b is less or equal to 0 , then return 0 . Example:

function getHypotenuseLength(a, b) {
  if (a <= 0 || b <= 0) {
    console.log(0);
  } else {
    console.log(Math.sqrt(a * a + b * b));
  }
}

getHypotenuseLength(3, 4); // returns 5
getHypotenuseLength(-1, 5); // return 0
