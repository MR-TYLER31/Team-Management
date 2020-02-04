const manager = require("./Lib/manager.js");
const engineer = require("./Lib/engineer.js");
const intern = require("./Lib/intern.js");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Runs program
initProgram();

async function initProgram() {
  try {
    let employeeData;
    let { name } = await nameInput();
    let { id } = await idInput();
    let { email } = await emailInput();
    let { role } = await roleInput();

    if (role === "Manager") {
      employeeData = await officeNumInput();
      let manager = new Manager(name, id, email, employeeData);
      return manager;
    } else if (role === "Engineer") {
      employeeData = await githubInput();
      let engineer = new Engineer(name, id, email, employeeData);
    } else if (role === "Intern") {
      employeeData = await schoolInput();
      let intern = new Intern(name, id, email, employeeData);
    }
  } catch (err) {
    console.log(err);
  }
}

// Inquire prompts for user inputs

function nameInput() {
  const name = inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please add new employees First and Last name."
  });
  return name;
}

function idInput() {
  const id = inquirer.prompt({
    type: "input",
    name: "id",
    message: "Designate new employees ID number."
  });
  return id;
}

function emailInput() {
  const email = inquirer.prompt({
    type: "input",
    name: "email",
    message: "What is the new employees email address?"
  });
  return email;
}

function roleInput() {
  const role = inquirer.prompt({
    type: "list",
    name: "role",
    message: "What is the employees First and Last name?",
    choices: ["Manager", "Engineer", "Intern"]
  });
  return role;
}

function officeNumInput() {
  const officeNum = inquirer.prompt({
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?"
  });
  return officeNum;
}

function githubInput() {
  const username = inquirer.prompt({
    type: "input",
    name: "username",
    message: "What is the employees Github username?"
  });
  return username;
}

function schoolInput() {
  const school = inquirer.prompt({
    type: "input",
    name: "school",
    message: "What school does the Intern attend?"
  });
  return school;
}
