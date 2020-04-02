
//using common js get core module

const path = require('path');

// getting the basename file

 console.log(path.basename(__filename));

 // Directory name

 console.log(path.dirname(__filename));
 
 //extension

 console.log(path.extname(__filename));

 //object path


 console.log(path.parse(__filename).name);
 
 
 