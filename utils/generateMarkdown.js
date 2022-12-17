// TODO: Create a function that returns a license badge based on which license is passed in

const { default: Choices } = require("inquirer/lib/objects/choices");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache") {
    return `[![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "gnu") {
    return `[![GNU](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "mit") {
    return `[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  //if license is declared; return license badge; use switch case or if statements
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //build table of contents here
  //if no license, we do not need license link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License

    The license used was ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, instructions, usage, contributions, test, license }) {
  return `# Title,
  The title of my project is ${title}.

  ## Description

  My project description is the following: ${description}

  ## Installation Instructions

  The instructions used in the project are ${instructions}

  ## Usage
  The user will do the following in order to use the project application: ${usage}

  ## Contributions

  As a project coordinater, I was able to contribute by ${contributions}

  ## Test

  The test instructions are as follows: ${test}

${renderLicenseSection(license)}
${renderLicenseBadge(license)}
`;
}

module.exports = generateMarkdown;

