function shout (string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
    console.log("whisper function:", typeof whisper);

    module.exports = { whisper, shout};

whisper(String)

function logShout(string) {
    console.log(string.toLowerCase());
}
module.exports = { whisper, shout, logShout, logWhisper, sayHiToHeadphonedRoommat };

console.log("whisper function:", typeof whisper);
console.log("whisper function:", typeof shout);
console.log("whisper function:", typeof logShout);

function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}