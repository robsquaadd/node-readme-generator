const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?: ",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Describe your project. (Required): ",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "What are the instructions to install your application?:\n\n",
    },
    {
      type: "input",
      name: "usageInstructions",
      message: "What are the instructions to use your application?:\n\n",
    },
    {
      type: "list",
      name: "projectLicense",
      message: "Which liscense applies",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "contributionInstructions",
      message: "How can contributors contribute to your project?:\n\n",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "How can users test your application?:\n\n",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your github username?: ",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "What is your email address?: ",
    },
  ]);
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("README.md file is created.");
  });
}

const init = async () => {
  let userInput = await promptUser();
  let markDownText = generateMarkdown(userInput);
  writeToFile("README.md", markDownText);
};

init();
