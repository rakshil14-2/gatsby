const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const files = fs.readdirSync('./input');

// let inputFile = "./input/board1.jpg";
// let outputFile = "./output/output.jpg";
let inputFile, outputFile;

files.forEach(x => {
    inputFile = path.join(__dirname, 'input', x);
    outputFile = path.join(__dirname, 'output', x)
    sharp(inputFile).resize({ height: 15 }).toFile(outputFile)
        .then(function (newFileInfo) {
            // newFileInfo holds the output file properties
            console.log(newFileInfo);
        })
        .catch(function (err) {
            console.log("Error occured");
        });
})

// sharp(inputFile).resize({ height: 400 }).toFile(outputFile)
//     .then(function (newFileInfo) {
//         // newFileInfo holds the output file properties
//         console.log("Success")
//     })
//     .catch(function (err) {
//         console.log("Error occured");
//     });