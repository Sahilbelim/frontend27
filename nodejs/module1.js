function Greetings(name) {
     console.log("Hello How are you " + name);
}

function Walk(name) {
     console.log(name + " can walk");
}

module.exports.Greetings = Greetings;
module.exports.task = Walk;