// TODO: Include packages needed for this application
const { create } = require('domain');
const inquirer = require('inquirer');
const { title } = require('process');
const generatedocument = require('./utils/generateMarkdown')
//const { title } = require('process');

fs = require('fs');

// TODO: Create an array of questions for user input

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
           message: 'What kind of Licence would you like?',  
           choices: ['MIT','Apache','Mozilla Public','BSD 3 clause', 'GPL']
        },
        {
            type: 'input',
            name: 'gitUsername',
            message: 'please enter your Git Hub username.',
            validate: userNameinput => 
            {
                if(userNameinput){
                    return true;
                }else{
                    console.log ('Please enter your Git Hub Username.');
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


   
   
   
   
   /*.then(answers => {
       const title = answers.title;
       const description = answers.description;
       console.log(answers.title);
       console.log(answers.description);*/
   //}) 




promptUser().then(answers =>{
   
     const items ={title: answers.title, description: answers.description, 
     }
     const {title} = items

   
  
    var description = answers.description;
    var installation = answers.installation;
    var usage = answers.usage;
    var contributors = answers.contributors;
    var test = answers.test;
    var license = answers.license;

     if(license == "MIT"){
         var licensebadge = "![MIT Badge](./assets/License-MIT-blue)"
         var licenseinfo = "https://choosealicense.com/licenses/mit/"
     }
     //if(license == "Apache")



    var gitUsername = answers.gitUsername;
    var gitProfile= answers.gitProfile;
    var email =answers.email;


    const createdocument = inputtitle => {
   
        return`
         # ${title}                         ${licensebadge}                       

         ## Description

         ${description}

         ##Table of Contents
         * [Installation](#installation)
         * [Usage](#usage)
         * [Credits](#credits)
         * [License](#license)
         
         ##installation instructions 

         ${installation}

         ## Usage

         ${usage}

         ## Features

         ## Testing 

         ## Credits

         ${contributors}

         ## License:

         For more information on the Licence on this Project visit ${licenseinfo}
        
        
      
      `};

        var trythis = createdocument(items)

      //var stringthis = String(inputtitle);
    
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







// TODO: Create a function to write README file
// const writeReadme = content =>{
//     return new Promise((resolve, reject) => {
//         fs.writeFile( './.dist/readme.md',  function (err) {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({ ok: true, message: 'File Created!'});

            
//         });
//     });
    
// };



// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

