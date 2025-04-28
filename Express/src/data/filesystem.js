const fs = require('fs');
                                    
const read = (pathFile) => {
    return fs.readFileSync(pathFile, "utf-8");}
    const parse = (json) => {
        return JSON.parse(json);
    }
    const write = (pathFile,data) => {
        return fs.writeFileSync(pathFile, data, "utf-8");
    };
    const string = (objeto) => {
        return JSON.stringify(objeto);
    }


    module.exports = {read,parse,write,string}