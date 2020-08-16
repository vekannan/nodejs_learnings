let fs = require('fs');
let { promisify } = require('util')
let promisifieFileRead = promisify(fs.readFile)

let readFileAsync = async (filePath) => {
    let content;
    try{
        content = 
          promisifieFileRead(filePath,'utf-8');
          return content;
    }catch(e){
        return e;
    }
       
    }
module.exports = readFileAsync;