// Asynchronous Jabvascript

function outSide(callback) {
    callback();
  }
  
  function n (){
    setTimeout(() => {
      console.log("Hello Leon")
    }, 3000);
  }
   outSide(n);
  
  // Promises....represents eventual completion of an asynchronous function
  function inSide() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Leon", age: 23 })
      }, 3000);
    });
  }
  
  inSide()
       .then((res) => {
        console.log(res);
       })
       .catch(err => {
        console.log(err);
       })
  
  
  
   async function n() {
    try{
      let x = await inSide()
      console.log("Awaiting for something to happen");
    } catch(err) {
      console.log(err);
    }
   }   
   
   n();
  
  
  
  
  
  