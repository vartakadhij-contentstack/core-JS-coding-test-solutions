/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
    // if(typeof(numbers) == 'undefined' || typeof(numbers) != 'number')
    // {
    //     throw Error("Invalid Input");
    // }
    // if(isNaN(numbers))
    // {
    //   throw Error("Invalid Input");
    // }
      var sum = 0;
      for(i=0; i<numbers.length; i++)
      {
        sum = sum + numbers[i];
      }
      return sum;
};

module.exports = addition;