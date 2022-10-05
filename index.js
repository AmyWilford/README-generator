const inquirer = require('inquirer');
const fs = require('fs');

// Write README file
fs.writeFile('README.md', 'utf8', (error, data) =>
error ? console.error(error) : console.log(data)
);

// Prompts to populate README file
inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter your project name:',
        name: 'title'
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
        type: 'checkbox',
        message: 'Select your repository license from the available options:',
        name: 'license',
        choices: ['Academic Free Licesnse', 'Artistic License', 'Microsoft Public License', 'MIT', 'No License'] 
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
])

