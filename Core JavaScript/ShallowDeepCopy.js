//Step 1: Seedhi values (number, string) ki copy

let x = 6;
let y= x;
y=10;
console.log(x); //6
console.log(y); // 10

//Step 2: Object ki “copy” (yahan dhokha hai)
// Object ek ghar jaisa hai, aur variable us ghar ka address ki parchi hai.

const a = { name: "Aman" };   // ghar bana, a ke paas uska address
const b = a;                  // b ko wahi address ki parchi mili

b.name = "riya";

console.log(a.name);

//Step 3: Asli copy (spread) = naya ghar banana

const a = { name: "Aman" };
const b = { ...a };      // naya ghar bana, usme a wale ghar ka saman rakha

b.name = "riya";
console.log(a.name);

//Step 4: Dikkat kahan hai? Ghar ke andar ek aur ghar (nested)

const a = {
  name: "Aman",
  address: { city: "Indore" }    // object ke andar ek aur object
};


//Tarika	Bada ghar	Chhota ghar (nested)
//b = a	wahi ghar (link)	wahi
//{ ...a } (shallow)	naya	wahi (share)
// structuredClone(a) (deep)	naya	naya