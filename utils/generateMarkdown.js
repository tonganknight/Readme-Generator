








// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
 function rencderbadge(){

}






// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return 

const createdocument = inputtitle => {
   
  return`
  # ${title}   ${licensebadge}                       
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
           
  ## installation 
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Features
  
  ${features}
  
  ## Testing 
  
  ${test}
  
  ## Credits
  
  ${contributors}
  
  ## License:
  
  For more information on the Licence on this Project visit ${licenseinfo}
  
  ## Questions 
  
  If you have any questions about this project, or if you run into any issues please contact me at ${email}
  or you can also find me on GitHub.com my username is ${gitUsername} Please visit my profile page at ${gitProfile}
  
  `};

module.exports = {
  createdocument: createdocument
};
