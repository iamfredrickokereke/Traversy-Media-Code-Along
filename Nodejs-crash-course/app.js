// using the common js to get the class

const Animal = require('./person')

// using the es6 import method to get class

// import Animal from './person'

const Animal1 = new Animal('monkey', 34)


console.log(Animal)

console.log(Animal1);


Animal1.greeting();
