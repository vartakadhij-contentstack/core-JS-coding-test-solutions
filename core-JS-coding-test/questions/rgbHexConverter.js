/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    // if(rgbValues > 255 || rgbValues.length > 3 || typeof(rgbValues) !== 'integer')
    // {
    //     throw Error("Invalid Input");
    // }
    var finalHex = [];
    for(i=0; i<rgbValues.length; i++)
    {
        var hex = rgbValues[i].toString(16);
        finalHex[i] = hex.length == 1? "0" + hex: hex;
    }

    return "#" + finalHex.join('');
};

console.log(rgbToHexConversion(0,255,255));
module.exports = rgbToHexConversion;
