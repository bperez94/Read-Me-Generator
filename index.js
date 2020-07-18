const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function UserPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name:"title",
            Message:"What is your Project TitLe?",
        },
        {
            type: "input",
            name:"date",
            Message:"What day did you creat your application?", 
        },
        {
            type: "input",
            name:"decription",
            Message:"Describe what your apllication does?", 
        },
        {
            type: "input",
            name:"install",
            Message:"Are there any set up or installation requirments?",
        },
        {
            type: "input",
            name:"Bugs",
            Message:"Are there any bugs or pronblems with the apllication?",
        },
        {
            type: "input",
            name:"contact",
            Message:"Please share your contact info?",
        },
        {
            type: "input",
            name:"tech",
            Message:"What Technologies were used",
        },
        {
            type: "input",
            name:"contribution",
            Message:"Provide a link to you deployed application",
        },
        {
            type: "list",
            name:"License",
            Message:"Provide you copy right",
            choices: [
                "MIT",
                "Apache",
                "BSD3",
                "GNU General Public"
            ]
        }
        ]);
    }
    



UserPrompt()
    // function to write README file
 .then(function writeToFile(genMarkdown,data) {
    var html = genMarkdown(data);
    return writeFileAsync("index.html",html);
})
.then(function() {
    console.log("You completed your read me!")
})
.catch(function(err) {
    console.log(err)
});


