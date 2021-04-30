//required
const { create } = require('domain');
const inquirer = require('inquirer');
const { title } = require('process');
const generatedocument = require('./utils/generateMarkdown')

fs = require('fs');

//Questions to ask for input 

const promptUser = () =>{
    return inquirer.prompt([
       
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? ',
            validate: titleInput => 
            {
                if(titleInput){
                    return true;
                }else{
                    console.log ('please enter the Title of your project.');
                    return false;
                }

               
            }
            
               
        },
        {
            type: 'input',
            name: 'description',
            message: "Please enter a description for your project",
            validate: descriptionInput => 
            {
                if(descriptionInput){
                    return true;
                }else{
                    console.log ('please enter a description for your Project!');
                    return false;
                }


            }

        },

        
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions for installation of your project',
            validate: installinstructions => 
            {
                if(installinstructions){
                    return true;
                }else{
                    console.log ('Please enter instructions for installation of your project');
                    return false;
                }


            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please include any usage information.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please include any contributors on your project',
            validate: nameInput => 
            {
                if(nameInput){
                    return true;
                }else{
                    console.log ('please enter contributors for this Project');
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please include any information for testing your project',
            validate: testinput => 
            {
                if(testinput){
                    return true;
                }else{
                    console.log ('Please list some information about testing your project.');
                    return false;
                }
            }   
        },
        
        {
           type: 'checkbox',
           name: 'license',
           message: 'What kind of License would you like?',  
           choices: ['MIT','GPL 3.0','Apache','LGPL 2.1', 'BSD', 'ISC']
        },
        {
            type: 'confirm',
            name: 'askfeatures',
            message: 'Would you like to list some of the features your project has?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please add a list of features for your project',
            when: ({ askfeatures }) => askfeatures

        },
        {
            type: 'input',
            name: 'gitUsername',
            message: 'please enter your Git Hub username as a reference for questions',
            validate: userNameinput => 
            {
                if(userNameinput){
                    return true;
                }else{
                    console.log ('Please enter a Git Hub Username.');
                    return false;
                }
            }   

        },
        {
            type: 'input',
            name: 'gitProfile',
            message: 'Please enter the link to your Git Hub Profile.',
            validate: gitUsernameInput => 
            {
                if(gitUsernameInput){
                    return true;
                }else{
                    console.log ('Please enter a link to your Git Hub Profile');
                    return false;
                }
            }   

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email Address.',
            validate: emailInput => 
            {
                if(emailInput){
                    return true;
                }else{
                    console.log ('Please enter a email address for questions');
                    return false;
                }
            }   
        }


        
   ]);

 };

promptUser().then(answers =>{
   //deconstructing string 
     const items ={title: answers.title, description: answers.description, 
     }
     const {title} = items
  
    var description = answers.description;
    var installation = answers.installation;
    var usage = answers.usage;
    var contributors = answers.contributors;
    var features =answers.features;
    var test = answers.test;
    var license = answers.license;

    //If to change the kind of badge that is applied on the readme 

     if(license == "MIT"){
         var licensebadge = "![MIT Badge](https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-MIT-blue.svg)"
         var licenseinfo = "https://choosealicense.com/licenses/mit/"
     }
     if(license == "Apache"){
        var licensebadge = "![Apache Badge](https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-Apache%20-brightgreen.svg)"
        var licenseinfo = "https://www.apache.org/licenses/"
     }
     if(license == "GPL 3.0"){
        var licensebadge = "![GPL 3.0](https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-GPL%203.svg)"
        var licenseinfo = "https://choosealicense.com/licenses/gpl-3.0/"
     }
     if(license == "LGPL 2.1"){
        var licensebadge = "![LGPL 3.0]https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-LGPL%202.svg"
        var licenseinfo = "https://choosealicense.com/licenses/lgpl-3.0/"
     }
     if(license == "BSD"){
        var licensebadge ="![BSD]https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-BSD-orange.svg"
        var licenseinfo = "https://whatis.techtarget.com/definition/BSD-licenses"
     }
     if(license == 'ISC'){
         var licensebadge ="![ISC]https://github.com/tonganknight/Readme-Generator/blob/master/assets/images/License-ISC-green.svg"
         var licenseinfo = "https://opensource.org/licenses/ISC"
     }

    var gitUsername = answers.gitUsername;
    var gitProfile= answers.gitProfile;
    var email =answers.email;

// format of readme

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

        var trythis = createdocument(items)

      //write function to create README File in .dist
    
    const writeReadme = content =>{
            return new Promise((resolve, reject) => {
                fs.writeFile( './.dist/README.md', content,  function (err) {
                     if (err) {
                         reject(err);
                         return;
        }
        
                     resolve({ ok: true, message: 'File Created!'});
        
                    
                 });
             });
            
         };

        writeReadme(createdocument(items));

})
