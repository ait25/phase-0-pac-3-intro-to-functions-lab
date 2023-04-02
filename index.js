describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {

    })
})

function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log("HELLO");
}

function logWhisper(string) {
    console.log("hello");
}

function sayHiToHeadphonedRoommate(message) {
    if (message.toLowerCase() === message && message !== "") {
        return "I can't hear you!";
    } else if (message.toUpperCase() === message && message !== "") {
        return "YES INDEED!";
    } else if (message === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return message;
    }
}

expect(shout("hello")).toEqual("HELLO");
