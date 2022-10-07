// function to return a license badge based on which license is passed in - If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge;
    if (license == 'Eclipse Public License') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license == 'IBM Public License') {
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    } else if (license == 'MIT License') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else {
        licenseBadge = '';
    }
    return licenseBadge;
}

// Function to render License link inclusion within table of contents
function renderLicenseLink(license) {
    if (license) {
        if (license === 'No License') {
            return '';
        } else {
            return `\n- [License](#license)`;
        }
    }
}
// Function to render License section of README with license details
function renderLicenseDetails(license) {
    if (license) {
        if (license === 'No License') {
            return '';
        } else {
            return `\n## License:\n ${license}\n`;
        }
    }
}

// Function to return the license section of README - If there is no license, return an empty string
function renderLicenseSection(license) {
    let finalLicense = `${renderLicenseBadge(license)}`;
    return finalLicense;
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}\n
${renderLicenseSection(data.license)}
## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)${renderLicenseLink(data.license)}
- [Questions](#questions)
## Description:\n
${data.description}\n
## Installation:\n
${data.installation}\n
## Contributing:\n
${data.contributing}\n
## Tests:\n
${data.tests}${renderLicenseDetails(data.license)}
## Questions:\n
For any questions about this respository, please contact:\n 
- GitHub: https://github.com/${data.username}\n
- Email: ${data.email}`;
}

// export function to for use in index.js
module.exports = generateMarkdown;
