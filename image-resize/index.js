const sharp = require('sharp');

let inputFile  = "canon-eos-800D.jpg";
let outputFile = "output.jpg";

sharp(inputFile).resize({ height: 150}).toFile(outputFile)
    .then(function(newFileInfo) {
        // newFileInfo holds the output file properties
        console.log("Success")
    })
    .catch(function(err) {
        console.log("Error occured");
    });