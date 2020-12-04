/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {

   if(typeof(str) == 'number')
   {
      throw Error("Invalid Input");
   }

   var vowels = {
      a: str.match(/[a]/gi) === null? 0: str.match(/[a]/gi).length,
      e: str.match(/[e]/gi) === null? 0: str.match(/[e]/gi).length,
      i: str.match(/[i]/gi) === null? 0: str.match(/[i]/gi).length,
      o: str.match(/[o]/gi) === null? 0: str.match(/[o]/gi).length,
      u: str.match(/[u]/gi) === null? 0: str.match(/[u]/gi).length,
   }

   return vowels;
};

module.exports = frequencyCounter;
