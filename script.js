let name = 'Peter Parker';
console.log(name);

function calculate(){
    console.log('hello');
    console.log(2+2);
}
calculate();

function add(x,y){
    return x+y;
}
console.log(add(2,3));//return 5

function greet(name){
    console.log(`Hello, ${name}!`);
}
greet('John Doe');

function sayMyName(){
console.log('Jewells');
console.log('Grace');
console.log('Couch');
}
sayMyName();

function sum(x,y){
    return x+y;
}
console.log(sum(2,3));
num1=sum(2,3);
console.log(num1);

const square = function(x){
    return x*x;
};
console.log(square(5));//25 should show in console.

const math = function(a,b){
    return a * b;
}
console.log(math(8,4));//32 should show



/*const hello = function(){
    return "Hello World!";
}
console.log(hello);*/

const hello = () => {
    return "Hello World!";
}
console.log(hello);

/*function mul2(a,b){
    return a*b;
}
console.log(mul2(6,8));*/
const mul = (a,b) => {
    return a*b
}
console.log(mul(11,9));

const person ={
    name:'Charles',
    shirt:'white'
}
console.log(person['name']);

person.phone='444-555-7777'
console.log(person.phone);

console.log(person);

/*
function name(){}

const name = function(){}

const name = (a,b) => {}
*/

const introducer = (name,shirt) =>{
    const person={
        name:name,
        shirt:shirt
    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}`

    return intro
}
console.log(introducer('Terry', 'black'));



/*
function add(a,b){
    return a+b;
}
console.log(add(4,6));//return 10


function subtract(a,b){
    return a-b;
}
console.log(subtract(4,6));//return -2


function multiply(a,b){
    return a*b;
}
console.log(multiply(4,6));//return 24


function divide(a,b){
    return a/b;
}
console.log(divide(4,6));//return 0.6666666



const mul = (x,y) => {
    return x*y
}
console.log(mul(3,7));//return 21


const add1 = (x,y) => {
    return x+y
}
console.log(add1(3,7));//return 10


const sub = (x,y) => {
    return x-y
}
console.log(sub(3,7));//return -4


const div = (x,y) => {
    return x/y
}
console.log(div(3,7));//return 0.42857114
*/