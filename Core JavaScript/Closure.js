

//Ek line mein: Closure ka matlab hai ki 
// ek function apne bahar wale function ke variables ko yaad rakhta hai,
//  chahe bahar wala function khatam ho chuka ho



function makecouner(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const  counter = makecouner();
console.log(counter());


function makeGreeter(greeting){
    return function( name ){        // 1. yahan name ka parameter
        return greeting + " " + name;              // 2. greeting aur name jodke
    }
}

const hello = makeGreeter("Hello");
const namaste = makeGreeter("Namaste");


function makecount(){
    let count =0 ;
    return function (){
        count++;
        return count;
    }
}
const c= makecount();
c();
c();
console.log(c());