// Packages Required for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('utils/generateMarkdown.js');

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
        name: 'installation'
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
        message: 'Enter repository test instruction:s',
        name: 'tests' 
    },
    {
        type: 'list',
        message: 'Select your repository license from the available options:',
        name: 'license',
        choices: ['Academic Free License', 'Artistic License', 'Microsoft Public License', 'MIT', 'No License'] 
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Your README file is ready!')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function (input) {
        console.log(input)
        writeToFile('README.md', generateMarkdown(input));
    });
}

// Function call to initialize app
init();
