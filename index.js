const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');


rl.question(`Input file: `, function(filename) {
    fs.readFile(filename, function(error, buffer) {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        rl.question('Output file: ', function(newFilename) {
            fs.writeFile(newFilename, upperCased, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`Wrote to file ${newFilename}
As a result, ${newFilename} should now contain the text ${upperCased}`);
            })
        })
    })
})



