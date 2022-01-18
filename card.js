const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// clear the terminal before showing the npx card
clear()
const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:vivekkumarsingh2002@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];


const data = {
    name: chalk.bold.green("                     Vivek Kumar Singh"),
    handle: chalk.white("@harshhhdev"),
    fact: chalk.hex('#B10000')('I love Deadlines'),
    // twitter: chalk.hex('#00A1D9')("https://twitter.com/Harshhhdev"),
    github: chalk.hex('#787878')("https://github.com/fazenecture"),
    // dev: chalk.hex('#330093')("https://dev.to/harshhhdev"),
    // dribbble: chalk.hex('#AB009C')("https://dribbble.com/harshhhdev"),
    // website: chalk.hex('#00AB9E')("https://harshhhdev.github.io"),
    npx: chalk.hex('#A1AB00')("npx vivek"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    // labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    // labelDev: chalk.hex('#A959FF').bold("           Dev:"),
    // labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    // labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

