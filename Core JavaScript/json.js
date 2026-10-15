//Kaam	Likhna kya hai	Kab
//Object ko text banana	JSON.stringify(obj)	data bhejna ho
//Text ko object banana	JSON.parse(text)	data lena ho

const user = { name: "Aman", age: 22 };

const text = JSON.stringify(user);   // text ban gaya: {"name":"Aman","age":22}
const back = JSON.parse(text);       // wapas object ban gaya

console.log(back.name);              // Aman