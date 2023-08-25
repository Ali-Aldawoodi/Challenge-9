// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
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
        name: 'usage',
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


// const data = questions.input

function writeToFile(filename, data) {
    // var data = questions.input
    //  filename = 'README.md'

 
fs.writeFile(filename, data, (err) =>
err ? console.log(err) : console.log('success')); 
};





// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answer) =>{
        const README = `# ${answer.title}, ${answer.description}, ${answer.installation}, ${answer.usage}, ${answer.guidelines} , ${answer.test}`;

        writeToFile('README.md',README, (err) =>
        err ? console.log(err) : console.log('success'))
    })

}

// Function call to initialize app
init();




// .then((response) => {
//     console.log(response)

// fs.writeFile('README.md', questions, (err) =>
// err ? console.log(err) : console.log('Thanks for the input!')
// ); 
// });