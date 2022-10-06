const inquirer = require('inquirer');
const fs = require('fs');


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

.then((response) => {
    console.log(`${response.title}, ${response.description}, ${response.installation}, ${response.usage}, ${response.contributing}, ${response.tests}, ${response.license}, ${response.username}, ${response.email}`)
});
// .then((response) => {
//     fs.writeFile('README.md',
//     `# ${response.title}\n
//     ## Description:\n
//     ${response.description}\n
//     ## Table of Contents:\n
//     - [Installation](#installation)\n
//     - [Usage](#usage)\n
//     - [Contributing](#contributing)\n
//     - [Tests](#tests)\n
//     - [License](#license)\n
//     - [Questions](#questions)\n
//     ## Installation:\n
//     ${response.installation}\n
//     ## Contributing:\n
//     ${response.contributing}\n
//     ## Tests:\n
//     ${response.tests}\n
//     ## License:\n
//     ${response.license}\n
//     ## Questions:\n
//     User: https://github.com/${response.username}\n
//     Email: ${response.email}\n`,
//         (error) =>
//     error ? console.error(error) : console.log('Your README file is complete!'))
// });
