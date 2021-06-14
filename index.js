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
            choices: ['None', 'Apache%202.0', 'GNU%20General%20Public%20License%20v3.0', 'MIT', 'BSD%202-Clause%20"Simplified"%20License', 'BSD%203203-Clause%20"New"%20or%20"Revised"%20License', 'Boost%20Software%20License%201.0', 'Creative%20Commons%20Zero%20v1.0%20Universal', 'Eclipse%20Public%20License%202.0', 'GNU%20Affero%20General%20Public%20License%20v3.0', 'GNU%20General%20Public%20License%20v2.0', 'GNU%20Lesser%20General%20Public%20License%20v2.1', 'Mozilla%20Public%20License%202.0', 'The%20Unlicense' ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contributing guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have been written for this application?'
        }
    ])
        .then((response) => writeFileAsync('./demo/README.md', generateMarkdown(response)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));
}


init();


