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

// .then((response) => {
//     console.log(`${response.title}, ${response.description}, ${response.installation}, ${response.usage}, ${response.contributing}, ${response.tests}, ${response.license}, ${response.username}, ${response.email}`)
// });
.then((response) => {
    fs.writeFile('README.md',
    `# ${response.title}
    ## Description:
    ${response.description}
    ## Table of Contents:\n
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
    ${response.tests}\n\n
    ## License:\n\n
    ${response.license}\n\n
    ## Questions:\n\n
    User: https://github.com/${response.username}\n\n
    Email: ${response.email}\n\n`,
        (error) =>
    error ? console.error(error) : console.log('Your README file is complete!'))
});
