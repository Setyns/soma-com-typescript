"use strict";
class useraccount {
    constructor(name, age, nickname, level) {
        this.name = name;
        this.age = age;
        this.nickname = nickname;
        this.level = level;
    }
    get getage() {
        return this.level;
    }
    set setlevel(level) {
        this.level = level;
    }
    logdetails() {
        console.log(`the player name is ${this.name} is ${this.age} and had the char ${this.nickname} at level ${this.level}`);
    }
}
class characcount extends useraccount {
    constructor(name, age, nickname, level) {
        super(name, age, nickname, level);
        this.nickname = nickname;
        this.level = level;
    }
}
const cleiton = new useraccount("cleiton", 23, "brago", 99);
console.log(cleiton);
console.log(cleiton.age);
console.log(cleiton.nickname);
console.log(cleiton.level);
cleiton.logdetails();
const josh = new characcount("josh", 45, "joshmaster", 80);
josh.logdetails();
josh.setlevel = 500;
console.log(josh.level);
