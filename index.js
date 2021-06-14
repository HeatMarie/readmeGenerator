// Packages need for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/markdown");


const writeFileAsync = util.promisify(fs.writeFile)


function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: "userName",
            message: 'Enter your Github username.'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the repository name?'
        },
        {
            type: 'input',
            name: 'fullName',
            message: 'What is your full name?',
        },
        {
            type: 'input',
            name: 'year',
            message: 'What year was this project created?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'title',
            message: `Enter the project's name`,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['None', 'Apache 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contributing guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were done to ensure the quality of this project?'
        }
    ])
        .then((response) => writeFileAsync('./demo/README.md', generateMarkdown(response)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));
}


init();


