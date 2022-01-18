#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');

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
  name: chalk.bold.hex("#d9ed92")("                     Vivek Kumar Singh"),
  handle: chalk.white("@fazenecture"),
  fact: chalk.hex('#B10000')('I love Deadlines!'),
  twitter: chalk.hex('#D3D3D3')("https://twitter.com/") + chalk.hex('#00A1D9	')("faze_necture"),
  github: chalk.hex('#D3D3D3')("https://github.com/") + chalk.hex('#eae2b7	')("fazenecture"),
  devpost: chalk.hex('#D3D3D3')("https://devpost.com/") + chalk.hex('#e07a5f	')("vivekkumarsingh2002"),
  linkedin: chalk.hex('#D3D3D3')("https://www.linkedin.com/in/") + chalk.hex('#0a9396	')("vivek-kumarsingh"),
  npx: chalk.hex('#A1AB00')("npx vivek"),

  labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
  labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
  labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
  labeldevpost: chalk.hex('#A959FF').bold("           devpost:"),
  labellinkedin: chalk.hex('#F259FF').bold("       linkedin:"),
  labelCard: chalk.hex('#FFF976').bold("                  Card:")
};
const me = boxen(
  [
      `${data.name}`,
      ``,
      `${data.labelTwitter}  ${data.twitter}`,
      `${data.labelGitHub}  ${data.github}`,
      `${data.labeldevpost}  ${data.devpost}`,
      `${data.labellinkedin}  ${data.linkedin}`,
      ``,
      `${data.labelCard}  ${data.npx}`,
      ``,
      `${chalk.bold(
          "Hi there! I'm Vivek, I'm a passionate Flutter " 
      )}`,
      `${chalk.bold("developer and UI/UX from India, and ")}`,
      `${chalk.bold(
          "I like to create weird and creative things ")}`,
      `${chalk.bold(
          "and enjoy creating new things everyday. Toss me an email if you want to collab!"
      )}`
  ].join("\n"),
  {
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: "single",
      borderColor: "blue"
  }
);

// Show the boxen
console.log(me);
prompt(questions).then(answer => answer.action());

