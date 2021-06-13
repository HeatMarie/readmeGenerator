// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=orange)

  ![Github commit activity](https://img.shields.io/github/commit-activity/m/${data.userName}/${data.repo}?color=%235FCE3B&style=for-the-badge)

  ![Github top language](https://img.shields.io/github/languages/top/${data.userName}/${data.repo}?color=%23AF630D&style=for-the-badge)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  

  ## Live URL
  <a href="https://${data.userName}.github.io/${data.repo}/"> Click for live URL </a>

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Questions
  ### For any questions or comments feel free to contact me with the email below.

  <a href="mailto:${data.email}">Email</a>

  <a href="https://github.com/${data.userName}">Github</a>
  

`;
}

module.exports = generateMarkdown;
