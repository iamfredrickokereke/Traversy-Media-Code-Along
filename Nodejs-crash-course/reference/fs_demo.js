const fs = require('fs');
const path = require('path');

// log all fs module method
console.log(fs);

// make a folder

fs.mkdir(path.join(__dirname, '/test', 'folder3'), (error) => {
    if (error) {
        throw error;
    }

    console.log("folder created");
    
})

