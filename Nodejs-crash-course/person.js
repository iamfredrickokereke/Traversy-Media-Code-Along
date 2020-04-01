const person = {
    name : "Fred Doe",
    Age : "30"
}

class Animal {
    constructor(name, size){
        name : this.name;
        size : this.size
    }

    greeting(){
        console.log(`Hey, my name is ${name} and i have a ${size} size.`);
        
    }
}

module.exports = person;