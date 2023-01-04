let startTime = '8 am'

function logHours () {
    let endTime = '4 Pm';
    console.log(startTime, endTime)
}

logHours();
// shows error as entime can be reach outside the function logHours
console.log(endTime);


