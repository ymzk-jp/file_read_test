const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const Configstore = require('configstore');
const conf = new Configstore('ginit');

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

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
}

run();