// Node modules and packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// Employee roles importing
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Importing HTML page layout
const generateHTML = require('./src/generateHTML');

const arrayTeam = []; 
let choice;

// Initialisation for manager info prompts
const init = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager:', 
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID:",
            validate: answer => {
                if  (isNaN(answer)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            validate: answer => {
                if  (isNaN(answer)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);
        arrayTeam.push(manager); 
    })
};

const addEmployee = () => {
    return inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "Would you like to add an employee or finish the task?",
                        choices: ['Engineer', 'Intern', 'Finish']
                    }
                ])
                .then(answer => {
                    choice = answer.role;
                    if (choice === 'Engineer'){
                        return inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'name',
                                    message: "Please enter the name of the engineer:", 
                                    validate: answer => {
                                        if (answer) {
                                            return true;
                                        } else {
                                            console.log ("Please enter an engineer's name!");
                                            return false; 
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'id',
                                    message: "Please enter the engineer's ID:",
                                    validate: answer => {
                                        if  (isNaN(answer)) {
                                            console.log ("Please enter the engineer's ID!")
                                            return false; 
                                        } else {
                                            return true;
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'email',
                                    message: "Please enter the engineer's email:",
                                    validate: email => {
                                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                                        if (valid) {
                                            return true;
                                        } else {
                                            console.log ('Please enter an email!')
                                            return false; 
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'github',
                                    message: "Please enter the engineer's github username:",
                                    validate: answer => {
                                        if (answer ) {
                                            return true;
                                        } else {
                                            console.log ("Please enter the engineer's github username!")
                                        }
                                    }
                                }
                            ])
                            .then(employeeData => {
                                let { name, id, email, github } = employeeData; 
                                let employee = new Engineer (name, id, email, github);; 
                                arrayTeam.push(employee); 
                                console.log(employee);
                                return addEmployee(arrayTeam);
                            })       
                            
                    } else if ( choice === 'Intern'){
                        return inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'name',
                                    message: "Please enter the name of the intern:", 
                                    validate: answer => {
                                        if (answer) {
                                            return true;
                                        } else {
                                            console.log ("Please enter an intern's name!");
                                            return false; 
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'id',
                                    message: "Please enter the intern's ID:",
                                    validate: answer => {
                                        if  (isNaN(answer)) {
                                            console.log ("Please enter the intern's ID!")
                                            return false; 
                                        } else {
                                            return true;
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'email',
                                    message: "Please enter the intern's email:",
                                    validate: email => {
                                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                                        if (valid) {
                                            return true;
                                        } else {
                                            console.log ('Please enter an email!')
                                            return false; 
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'school',
                                    message: "Please enter the intern's school name:",
                                    validate: answer => {
                                        if (answer) {
                                            return true;
                                        } else {
                                            console.log ("Please enter the intern's school name!")
                                        }
                                    }
                                },
                            ])
                            .then(employeeData => {
                                let { name, id, email, school } = employeeData; 
                                let employee = new Intern (name, id, email, school);; 
                                arrayTeam.push(employee); 
                                console.log(employee);
                                return addEmployee(arrayTeam);
                            })
                    } else {
                        console.log(arrayTeam);
                        return arrayTeam;
                    }
                })
            }     

// Generating HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // Error message
        if (err) {
            console.log(err);
            return;
        // Task success message
        } else {
            console.log("Your team profile has been successfully created! Please open the index.html.")
        }
    })
}; 

// Application initialisation
init()
  .then(addEmployee)
  .then(arrayTeam => {
    return generateHTML.generateHTML(arrayTeam);
  })
  .then(HTML => {
    return writeFile(HTML);
  })
  .catch(err => {
 console.log(err);
  });