const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    mainMenu();
});

//Code for prompts that will inturn start the functions to modify DB
function mainMenu() {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'MainMenu',
                choices: [
                    'View All Employees',
                    'View All Drpartments',
                    'View All Roles',
                    'Add Employee',
                    'Add Department',
                    'Add Role',
                    'Update Employee Role',
                    "Update Employee's Manager",
                    'Exit'
                ]
            }
        )
//switch statments will execute functions when choices are selected
};