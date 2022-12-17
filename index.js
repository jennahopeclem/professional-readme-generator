// TODO: Include packages needed for this application
const { prompt } = require("inquirer")
const { writeFile } = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
},
{
    type: "input",
    message: "What is your description?",
    name: "description",
},
{
    type: "input",
    message: "What are your installation instructions?",
    name: "instructions",
},

{
    type: "input",
    message: "How does a user use your project?",
    name: "usage",
},

{
    type: "input",
    message: "What did you contribute to the project?",
    name: "contributions",
},

{
    type: "input",
    message: "What are the test instructions?",
    name: "test",
},

{
    type: "list",
    message: "What is the license used to create your project?",
    name: "license",
    choices: ["apache", "gnu", "mit", "none"]
},];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data), err => {
        err ? console.log(err) : console.log("file successfully created!")
    });
}

// TODO: Create a function to initialize app
async function init() {

    const response = await prompt(questions);
    console.log(response)
    writeToFile("README.md", response);
}

// Function call to initialize app
init();
