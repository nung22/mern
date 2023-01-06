// GIVEN
console.log(example);
var example = "I'm the example!";

//? AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//TODO 1
console.log(hello);
var hello = 'world';

//? AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

//TODO 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//? AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // logs 'magnet'
// }
// needle = 'haystack';
// test();

//TODO 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//? AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan); // logs 'super cool'

//TODO 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//? AFTER HOISTING BY THE INTERPRETER
// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // logs 'chicken'
// eat(); // logs 'half-chicken'

//TODO 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//? AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean(); // throws TypeError: mean is not a function
// console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//TODO 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//? AFTER HOISTING BY THE INTERPRETER
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs undefined
// genre = "disco";
// rewind(); // logs "rock", then logs "r&b"
// console.log(genre); // logs "disco"

//TODO 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//? AFTER HOISTING BY THE INTERPRETER
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // logs "san jose"
// learn(); // logs "seattle", then logs "burbank"
// console.log(dojo); // logs "san jose"

//TODO 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//? AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // throws TypeError: assignment to constant variable