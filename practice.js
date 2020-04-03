



// const y = (x)=> {
//     console.log(`hello after ${x} seconds`);
    
// }


// setTimeout(y, 4000, 4);
let  counter = 0;
const track = setInterval((x) => {
    console.log("Hello World");
    counter++;

    if(counter === 3){

        console.log("DONE!");
        
        clearInterval(track);
    }
    
}, 500);

