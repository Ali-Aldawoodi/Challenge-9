// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title'
    },
    {
        type:'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage information',
    },
    {
        type: 'input',
        message: 'What are your projects contribution guidelines?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test intructions?',
        name: 'test',
    },
]

// TODO: Create a function to write README file
function writeToFile(filename, data) {
 
fs.writeFile(filename, data, (err) =>
err ? console.log(err) : console.log('Thanks for the input!')
); 
};

writeToFile();



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




// .then((response) => {
//     console.log(response)

// fs.writeFile('README.md', questions, (err) =>
// err ? console.log(err) : console.log('Thanks for the input!')
// ); 
// });