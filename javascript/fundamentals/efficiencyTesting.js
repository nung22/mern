//TODO: Calculating prime numbers
// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }
// Number.prototype.isPrime = function() {
//     for( let i=2; i<=Math.sqrt(this); i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// // while( primeCount < 1e4 ) {
// //     if( num.isPrime() ) {
// //         primeCount++;
// //     }
// //     num++;
// // }
// while( primeCount < 1e5 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//         console.log(`Current number is ${primeCount}`)
//     }
//     num++;
// }
// // console.log(`The 10,000th prime number is ${num-1}`);
// // console.log(`This took ${performance.now() - start} milliseconds to run`);
// console.log(`The 100,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


//TODO: Fibonacci
// // recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// console.log(`The 30th fibonacci number is ${rFib(30)}`);
// console.log(`The recursive function took ${performance.now() - start} milliseconds to run`); // 15 sec
// // console.log(`The 30th fibonacci number is ${iFib(30)}`);
// // console.log(`The iterative function took ${performance.now() - start} milliseconds to run`); // 5 sec

//TODO: Reversing a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const { performance } = require('perf_hooks');
const start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(`The reversed string is ${reversed1}`);
console.log(`The original method took ${performance.now() - start} milliseconds to run`); // 3 sec

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let reversed2 = story.split("");
// for( let i=0; i<reversed2.length/2; i++ ){
//     let temp = story[i];
//     reversed2[i] = reversed2[reversed2.length - i - 1];
//     reversed2[reversed2.length - i - 1] = temp;
// }
// reversed2 = reversed2.join("")
// console.log(reversed2.length)
// console.log(`The reversed string is ${reversed2}`);
// console.log(`The original method took ${performance.now() - start} milliseconds to run`); // 3 sec
