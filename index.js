// module export link to generate markdown
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);
// inquireer and file share links
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    },
    {
        type: "input",
        Message:"",
        name:"",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
