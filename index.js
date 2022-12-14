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
                case 'Exit': connection.end();
                    break;
            }
        });
}
//functions to view db
function viewAllDepartments() {
    const query = 'SELECT * FROM department'
    connection.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    })
};

function viewAllRoles() {
    const query = 'SELECT * FROM role'
    connection.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    })
};

function viewAllEmployees() {
    const query = 'SELECT * FROM employee'
    connection.query(query, function (err, res) {
        console.table(res);
        mainMenu();
    })
};

// //functions to modify db
function addDepartment() {
    inquirer
        .prompt({
            type: 'input',
            message: 'Enter name of the department you would like to add.',
            name: 'newDepartment'
        })
        .then(function (res) {
            const newDepartment = res.newDepartment;
            const query = `INSERT INTO department (name) VALUES ('${newDepartment}')`;
            connection.query(query, function (err, res) {
                if (err) { throw err; }

                console.table(res);
                mainMenu();
            });
        });
}



function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter employee title.',
                name: 'roleTitle'
            },
            {
                type: 'input',
                message: 'Enter employee salary.',
                name: 'roleSalary'
            },
            {
                type: 'input',
                message: 'Enter employee Department ID.',
                name: 'roleDepartment'
            }
        ])
        .then(function (res) {
            const title = res.roleTitle;
            const salary = res.roleSalary;
            const departmentID = res.roleDepartment;
            const query = `INSERT INTO role (title, salary, department_id) VALUES ('${title}', '${salary}', '${departmentID}')`;
            connection.query(query, function (err, res) {
                if (err) { throw err; }
                console.table(res);
                mainMenu();
            })
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the employee's first name.",
                name: 'firstName'
            },
            {
                type: 'input',
                message: "Enter the employee's last name.",
                name: 'lastName'
            },
            {
                type: 'input',
                message: "Enter the employee's role ID.",
                name: 'employeeRoleID'
            },
            {
                type: 'input',
                message: "Enter employee's manager ID.",
                name: 'employeeManagerID'
            }
        ])
        .then(function (res) {
            const firstName = res.firstName;
            const lastName = res.lastName;
            const employeeRoleID = res.employeeRoleID;
            const employeeManagerID = res.employeeManagerID;
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', '${employeeRoleID}', '${employeeManagerID}')`;
            connection.query(query, function (err, res) {
                if (err) { throw err; }
                console.table(res);
                mainMenu();
            })
        })
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the employee's ID which you woule like to update.",
                name: 'updateEmployee'
            },
            {
                type: 'input',
                message: 'Enter the new role ID for the employee.',
                name: 'newEmployeeRole'
            }
        ])
        .then(function (res) {
            const updateEmployee = res.updateEmployee;
            const newEmployeeRole = res.newEmployeeRole;
            const queryUpdate = `UPDATE employee SET role_id = "${newEmployeeRole}" WHERE id = "${updateEmployee}"`;
            connection.query(queryUpdate, function (err, res) {
                if (err) { throw err; }
                console.table(res);
                mainMenu();
            });
        });
}