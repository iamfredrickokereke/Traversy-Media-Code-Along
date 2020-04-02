// const person = {
//     ourname : "Fred Doe",
//     ourAge : "30"
// }



class Animal {
    constructor(name, size){
        this.name = name;
        this.size = size
    }

    greeting(){
        console.log(`Hey, my name is ${this.name} and i have a ${this.size} size.`);
        
    }
}

// var x = new Animal("Eagle", "big")
// var y = new Animal("Lion", "Mighty")
// y.greeting()
// x.greeting();

// module.exports = {
   // name : person,
//     name2 : Animal
// }



module.exports = Animal;