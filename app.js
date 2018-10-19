const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const Configstore = require('configstore');
const conf = new Configstore('ginit');
const inquirer = require("inquirer");

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Ginit', {
            horizontalLayout: 'full'
        })
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
    process.exit();
}

const myQuestion = {
    "type": "list",
    "name": "myQuestion1",
    "message": "choice mood",
    "choices": ["good", "sad"]
};
const myQuestion2 = {
    "type": "input",
    "name": "myQuestion2",
    "message": "もうう少し詳しく教えて下さい。"
};
inquirer.prompt([myQuestion, myQuestion2], (answer) => {
    console.log("answer:" + answer.myQuestion1, answer.myQuestion2);
});