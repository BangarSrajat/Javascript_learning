

// Hoisting ka matlab hai JavaScript code execute karne 
// se pehle declarations ko unke scope mein process karta hai. Lekin var, let, const 
// aur function declarations ka behavior alag hota hai.


//example var

console.log(a)

var a=10;

// ouput-underfined  
// Kyun? var variable ki declaration process ho jaati hai,
//  lekin 10 ki assignment baad mein hoti hai.

_____________________________________________

// let 

console.log(a);
var a=10;

// output: ReferenceError



//Example 3: Function declaration
greet();

function greet() {
    console.log("Hello");
}

// Hello ouput


// var → block {} ko scope nahi maanta.

//let → block {} ka alag scope hota hai. 