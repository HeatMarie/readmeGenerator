// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;


  let licenseDescription = license;

  switch (licenseDescription) {
    case 'Apache 2.0':
      licenseDescription = `This project uses the Apache 2.0 license: for a full description click <a href="https://choosealicense.com/licenses/apache-2.0/">here</a>`;
      break;
    case 'GNU General Public License v3.0':
      licenseDescription = `This project uses the GNU General Public License v3.0: for a full description click <a href="https://choosealicense.com/licenses/gpl-3.0/">here</a>`;
      break;
    case 'MIT':
      licenseDescription = `
                MIT License

          Copyright (c) ${data.year}, ${data.fullName}

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
      licenseDescription = `BSD 2-Clause License

      Copyright (c) ${data.year}, ${data.fullName}
      All rights reserved.
      
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this
         list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice,
         this list of conditions and the following disclaimer in the documentation
         and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       `
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseDescription = `BSD 3-Clause License

      Copyright (c) ${data.year}, ${data.fullName}
      All rights reserved.
      
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this
         list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice,
         this list of conditions and the following disclaimer in the documentation
         and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its
         contributors may be used to endorse or promote products derived from
         this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      `
      break;
    case `Boost Software License 1.0`:
      licenseDescription = `Boost Software License - Version 1.0 - August 17th, 2003

      Permission is hereby granted, free of charge, to any person or organization
      obtaining a copy of the software and accompanying documentation covered by
      this license (the "Software") to use, reproduce, display, distribute,
      execute, and transmit the Software, and to prepare derivative works of the
      Software, and to permit third-parties to whom the Software is furnished to
      do so, all subject to the following:
      
      The copyright notices in the Software and this entire statement, including
      the above license grant, this restriction and the following disclaimer,
      must be included in all copies of the Software, in whole or in part, and
      all derivative works of the Software, unless such copies or derivative
      works are solely in the form of machine-executable object code generated by
      a source language processor.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
      SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
      FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
      DEALINGS IN THE SOFTWARE. `;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseDescription = `This project uses the Creative Commons Zero v1.0 Universal License: for full description click <a href="https://choosealicense.com/licenses/cc0-1.0/">here</a> `
      break;
    case `Eclipse Public License 2.0`:
      licenseDescription = `This project uses the Eclipse Public License 2.0: for full description click <a href="https://choosealicense.com/licenses/epl-2.0/">Here</a> `
      break;
    case `GNU Affero General Public License v3.0`:
      licenseDescription = `This project uses the GNU Affero Gneral Public License v3.0: for a full description click <a href="https://choosealicense.com/licenses/agpl-3.0/">here</a> `
      break;
    case `GNU General Public License v2.0`:
     licenseDescription = `This project uses the GNU General Public License 2.0: for a full description click <a href="https://choosealicense.com/licenses/gpl-2.0/">here</a> `;
     break;
    case `GNU Lesser General Public License v2.1`:
      licenseDescription = `This project uses the GNU lesser General Public License v2.1: for a full description click <a href="https://choosealicense.com/licenses/lgpl-2.1/">here</a>`;
      break;
    case `Mozilla Public License 2.0`:
      licenseDescription = `This project uses the Mozilla Public License 2.0: for a full description click <a href="https://choosealicense.com/licenses/mpl-2.0/">here</a> `
      break;
    case `The Unlicense`:
      licenseDescription = `This is free and unencumbered software released into the public domain.

      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
      
       `;
      break;
  }
  if (data.license.includes(" ")) {
    license = data.license.replaceAll(" ", "%20");
  };

  return `
  # ${data.title}

  ![badge](https://img.shields.io/static/v1?label=license&message=${license}&color=orange)

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
  ${data.description}\n
  ![screen-gif](images/test.gif)
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  
  ${licenseDescription}

  ## Questions
  ### For any questions or comments feel free to contact me at: <a href="mailto:${data.email}">${data.email}</a>
  \n
  \n
  To view more project visit my Github: <a href="https://github.com/${data.userName}">${data.userName}</a>
  

`;
}

module.exports = generateMarkdown;
