var Mouse = require('./mouse');
var Cat = require('./cat')
var Dog = require('./dog')

var cat = new Cat();
var dog = new Dog();
var mouse = new Mouse('Mickey');
try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog!');
}	
console.log(cat);
console.log('bingo');