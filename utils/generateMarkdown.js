// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge;
    if (license == 'Eclipse Public License') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    } else if (license == 'IBM Public License') {
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
    } else if (license == 'MIT License') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else {
        licenseBadge = '';
    }
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseUrl;
    if (license == 'Eclipse Public License') {
        licenseUrl = `(https://opensource.org/licenses/EPL-1.0)`;
    } else if (license == 'IBM Public License') {
        licenseUrl = `(https://opensource.org/licenses/IPL-1.0)`;
    } else if (license == 'MIT License') {
        licenseUrl = `(https://opensource.org/licenses/MIT)`;
    } else {
        licenseUrl = '';
    }
    return licenseUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let finalLicense = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
    return finalLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}\n
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
