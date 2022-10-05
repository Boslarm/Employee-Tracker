const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
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
                name: 'mainMenu',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    "Update Employee's Manager",
                    'Exit'
                ]
            }
        )
        //switch statments will execute functions when choices are selected
        .then((res) => {
            switch (res.mainMenu) {
                case 'View All Departments': viewAllDepartments();
                    break;
                case 'View All Roles': viewAllRoles();
                    break;
                case 'View All Employees': viewAllEmployees();
                    break;
                case 'Add Department': addDepartment();
                    break;
                case 'Add Role': addRole();
                    break;
                case 'Add Employee': addEmployee();
                    break;
                case 'Update Employee Role': updateEmployeeRole();
                    break;
                case "Update Employee's Manager": updateEmployeeManager();
                    break;
                case 'Exit': connection.end();
                    break;
            }
        });
}
//functions to view db
function viewAllDepartments() {
    console.log('hello')
};

// function viewAllRoles()

// function viewAllEmployees()

// //functions to modify db
// function addDepartment()

// function addRole()

// function addEmployee()

// function updateEmployeeRole()

// function updateEmployeeManager()