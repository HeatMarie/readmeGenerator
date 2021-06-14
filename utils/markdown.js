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
  let license = data.license;
  if(data.license.includes('%20')){
    license = data.license.replaceAll("%20", " ");
   };
   
   let licenseDescription = license;

   switch(licenseDescription){
    case 'Apache 2.0':
      licenseDescription =`<a href="https://choosealicense.com/licenses/apache-2.0/">Apache 2.0 Description</a>`;
      break;
    case 'GNU General Public License v3.0':
      licenseDescription = `<a href="https://choosealicense.com/licenses/gpl-3.0/">General Public License v3.0 Description</a>`;
      break;
    case 'MIT':
      licenseDescription = `
                MIT License

          Copyright (c) 

          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
          `;
       break;
    case 'BSD 2-Clause "Simplified" License':
      licenseDescription = `Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions
      are met:
      1. Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS
      OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
      WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
      OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
      HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
      LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
      OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
      SUCH DAMAGE. `
      break;
   }


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
  (${data.description})

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${license}<br>
  ${licenseDescription}

  ## Questions
  ### For any questions or comments feel free to contact me with the email below.

  <a href="mailto:${data.email}">Email</a>

  <a href="https://github.com/${data.userName}">Github</a>
  

`;
}

module.exports = generateMarkdown;
