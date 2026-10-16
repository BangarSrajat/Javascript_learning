


//this kya hai: jo object function ko call kar raha hai, this wahi hota hai.

// Rule: this function likhte waqt nahi, call karte waqt tay hota hai. . 
// ke pehle jo object hai, wahi this.
let user = {
    name: "shubham",
    showtime : () => {
console.log(this.name);
    }
};
user.showtime();



let brand = {
    name: "BMW",
    showbrand :() =>{
  console.log(this.name);
    }
};
brand.showbrand();


let users= {
    name: "SHubham",
    greet : () =>{
  console.log("hello " + this.name);
    }
};
users.greet();


let person = {
    name: "Aman",
    age:22,

    intro (){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}
person.intro();


const obj = {
    x:5,
    show(){
        consoe.log(this.x);
    }
}
obj.show();


function introduce(){
    console.log(this.name);
}

const q = {name:"AMAN", introduce};
const j = {name:"Riya", introduce};
introduce
q.introduce(); j.introduce();

_______________________________________


function hello() {
  console.log("Hi " + this.name);
}

const user = {
  name: "Aman",

  // 1. Shorthand method (sabse common, modern tarika)
  greet1() {
    console.log("Hi " + this.name);
  },

  // 2. function expression (purana tarika, same kaam)
  greet2: function () {
    console.log("Hi " + this.name);
  },

  // 3. arrow function
  greet3: () => {
    console.log("Hi " + this.name);
  },

  // 4. bahar bana hua function reference karna
  greet4: hello
};

user.greet1();   // Hi Aman
user.greet2();   // Hi Aman
user.greet3();   // Hi (khaali, ya window.name) , this = bahar wala
user.greet4();   // Hi Aman


