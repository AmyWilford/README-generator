// Packages Required for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter your project name:',
        name: 'title',
    },
    {
        type: 'input', 
        message: 'Enter your project description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter any applicable installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter repository usage information:',
        name: 'usage' 
    },
    {
        type: 'input',
        message: 'Enter respository contribution guidelines:',
        name: 'contributing' 
    },
    {
        type: 'input',
        message: 'Enter repository test instructions:',
        name: 'tests' 
    },
    {
        type: 'list',
        message: 'Select your repository license from the available options:',
        name: 'license',
        choices: ['Eclipse Public License', 'IBM Public License', 'MIT License', 'No License'] 
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username' 
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email' 
    }
]
// Function to write the file using a given filename, and data source
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Your README file is ready!')
    });
}

// will run inquirer prompt using questions array
// Then, it will take the responses (function(input)) and consolelog the input - and write the file called README.md, and run generateMarkdown function using input as the data argument
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        console.log(response)
        writeToFile('Sample-README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();
