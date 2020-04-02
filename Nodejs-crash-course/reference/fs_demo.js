const fs = require('fs');
const path = require('path');

// log all fs module method
console.log(fs);

// create a folder

// fs.mkdir(path.join(__dirname, '/test', 'folder1129'), (error) => {
//     if (error) {
//         throw error;
//     }

//     console.log("folder created");
    
// })


// create and write to folder

fs.writeFile('./test/folder12219', "hello, it works", (error) => {

    if (error) {
        throw error;
    }

    console.log("file created");
    

})
