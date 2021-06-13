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
  ![badge](https://img.shields.io/github/license/${data.userName}/${data.repo}?color=eb9a0e&style=flat-square)

  ![badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=orange)

  ![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

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
