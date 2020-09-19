let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer"
killerRabbit.speak("SKREEEE");

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype)