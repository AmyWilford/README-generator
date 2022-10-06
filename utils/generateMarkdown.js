// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let lisenceBadge;
    license ?  lisenceBadge = `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)]` : lisenceBadge ='';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let lisenceUrl;
    // license ? licenseUrl = : license ='';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}\n
## License:
${renderLicenseSection(data.license)}
## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Description:\n
${data.description}\n
## Installation:\n
${data.installation}\n
## Contributing:\n
${data.contributing}\n
## Tests:\n
${data.tests}\n
## License:\n
${data.license}\n
## Questions:\n
For any questions about this respository, please contact Amy:\n 
GitHub: https://github.com/${data.username}\n
Email: ${data.email}`;
}

module.exports = generateMarkdown;
