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

// fs.writeFile(path.join(__dirname, './test', 'test.txt' ), "hello, it works", (error) => {

//     if (error) {
//         throw error;
//     }

//     console.log("file created");

//     //appending a file by just changing its content and adding to previous

//     fs.appendFile(path.join(__dirname, './test', 'test.txt'), ' + 2nd time i was added again', (error) => {
//             if (error) {
//                 throw error;
//             }
        
//             console.log(" new file added");
            
//         })
    

// })


// read contents of a file


// fs.readFile(path.join(__dirname, './test', 'test.txt'), 'utf8', (error, content) => { if (error) throw error; console.log(content);
// })

var sampleText = "i love nodejs";

fs.rename(path.join(__dirname, './test', 'test.txt'), path.join(__dirname, './test', 'newtest.txt'), (error) => { if (error) {
    throw error;
   
    
}})