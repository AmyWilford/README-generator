// Packages Required for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter your project name:',
        name: 'title',
        validate: function(title)
        {
            if (!title) {
                console.log('please enter a project title')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input', 
        message: 'Enter your project description:',
        name: 'description',
        validate: function(description)
        {
            if (!description) {
                console.log('please enter a project description')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter any applicable installation instructions:',
        name: 'installation',
        validate: function(installation)
        {
            if (!installation) {
                console.log('please enter installation details. Input N/A if not applicable')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter repository usage information:',
        name: 'usage',
        validate: function(usage)
        {
            if (!usage) {
                console.log('please enter usage instructions. Input N/A if not applicable')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter respository contribution guidelines:',
        name: 'contributing',
        validate: function(contributing)
        {
            if (!contributing) {
                console.log('please enter contribution instructions. Input N/A if not applicable')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter repository test instructions:',
        name: 'tests',
        validate: function(tests)
        {
            if (!tests) {
                console.log('please enter test instructions. Input N/A if not applicable')
                return false;
            }
            return true;
        }
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
        name: 'username', 
        validate: function(username)
        {
            if (!username) {
                console.log('please enter a github username.')
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
        validate: function(email)
        {
            if (!email) {
                console.log('please enter an email address. Input N/A if you do not wish to be contacted')
                return false;
            }
            return true;
        }
    }
]
// Function to write the file using a given filename, and data source
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Your README file is ready!')
    });
}

// Function to initialize inqurier prompts. Then, use responses to write README file and generate copy.
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        console.log(response)
        writeToFile('Sample-README.md', generateMarkdown(response));
    });
}

// Call function to initialize program
init();
