const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");
const {genMarkdown, generateMarkdown} = require('./utils/generateMarkdown.js');


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
            name:"description",
            Message:"Describe what your apllication does and how it works?", 
        },
        {
            type: "input",
            name:"install",
            Message:"Are there any set up or installation requirments?",
        },
        {
            type: "input",
            name:"bugs",
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
            type: "input",
            name:"license",
            Message:"Provide you copy right",// also needs list with options for license
        }
    ]);
}

UserPrompt()
    // function to write README file
 .then(function writeToFile(data) {
 //   return writeFileAsync("index.html",html);
 //console.log(data);
 let htmlString = generateMarkdown(data);
 console.log(htmlString);
 fs.writeFile("index.html",htmlString,function (err) {
     if (err) throw err;
     console.log("hi");
 })
    

})
.then(function() {
    console.log("You completed your read me!")
})
.catch(function(err) {
    console.log(err)
});


// function to initialize program
function init() {
//console.log("hello world");
//console.log("genMarkdown =" + generateMarkdown);
UserPrompt()
}

// function call to initialize program
init();
