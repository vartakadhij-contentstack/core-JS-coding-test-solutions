// str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando

const rotateString = (str, n, direction) => {
  var temp = str.split("");
  if(direction == "right")
  {
    var tempRight = temp.splice(-n);
    temp = [tempRight + temp.join()].join('');
  }
  else if(direction == "left")
  {
    var tempLeft = temp.splice(n);
    temp = [tempLeft + temp.join()].join('');

  }
  else
  {
    return console.log("Enter a valid direction");
  }
  return temp.split(',').join('');
};

console.log(rotateString("random",1,"right"));
module.exports = rotateString;