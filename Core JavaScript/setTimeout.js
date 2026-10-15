

// Idea: Sync vs Async Sync matlab ek ke baad ek, 
// jaise line mein lagke kaam. Async matlab
//  “ye kaam time lega, tab tak baaki kaam chalne do”.


//step 1 settimeout()


console.log("start");

setTimeout(()=>{
    console.log("this is doosra kaam");
},2000);

console.log("third kaam");



//Step 2: Promise (chai ka token)


//Promise ek vaada hai: “abhi result nahi hai,
// lekin baad mein aayega”. Iski 3 states hoti hain:


const chai = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("chai ready hai");
    },2000)
});

//resolve(...) bulata hai success ka
//reject(...) bulata hai fail ka
//.then() success ka result pakadta hai
// .catch() error pakadta hai


const p = new Promis((resolve,reject)=>{
    setTimeout(()=>{
  resolve("done");
    },1000);
});

p.then((resuke)=>{
    console.log(resuke);
});


//Part 4: await (wahi kaam, aasaan likhawat)

const food = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("food is ready");
    },6000);
});

async function foodcount(){
    const result =await food;
    console.log(result);
}

foodcount();


const orderfood = new Promise((resolve,reject)=>{
   if (available) {
      resolve("food is ready");
    } else {
      reject("food khatam ho gaya");
    }
  });


async function main() {
  try {
    const result = await orderFood(false);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}
main();