/*
TO COMPLETE:
- WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
*/

const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer prompts to populate README file
inquirer
.prompt([
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
])
// .then((response) =>{
//     fs.writeFile('README.md', 'utf-8', (err) =>
//    err ? console.error(err) : console.log('Your README file is complete!'))
// });

.then((response) => {
    fs.writeFile('README.md',
`# ${response.title}\n
## Description:\n
${response.description}\n
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation:\n
${response.installation}\n
## Contributing:\n
${response.contributing}\n
## Tests:\n
${response.tests}\n
## License:\n
${response.license}\n
## Questions:\n
GitHub User: https://github.com/${response.username}\n
For any questions about this respository, please contact Amy Wilford: ${response.email}`,
    (error) =>
    error ? console.error(error) : console.log('Your README file is complete!'))
});
