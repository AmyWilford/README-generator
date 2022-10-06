const inquirer = require('inquirer');
const fs = require('fs');


// Prompts to populate README file
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
${response.description}
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation:\n
${response.installation}
## Contributing:\n
${response.contributing}
## Tests:\n
${response.tests}
## License:\n
${response.license}
## Questions:\n
User: https://github.com/${response.username}\n
Email: ${response.email}`,
        (error) =>
    error ? console.error(error) : console.log('Your README file is complete!'))
});
