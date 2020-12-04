/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {

    if(isNaN(seconds))
    {
        throw Error("Invalid Input");
    }

    var time = parseInt(seconds);
    const convertedTime = {
        hours: Math.floor(time / 60 / 60),
        minutes: Math.floor(time / 60) % 60,
        seconds: Math.floor(time % 60),
    }

    return convertedTime;
};

module.exports = convertTime;