const fs = require("fs");
const src = "/../../Images/";


const folderRead = async() =>{
    var customerDataArray = []
    fs.readdirSync(src).forEach(file => {
    file = fs.createReadStream(src)
    // formData.append('file', file)
    customerDataArray.push(file)
    console.log(file);
    });
    // console.log(customerDataArray)
}


folderRead();