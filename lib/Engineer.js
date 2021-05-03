// Employee constructor importing
const Employee = require("./Employee");

// Extending employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Employee constructor calling
        super (name, id, email);
        this.github = github; 
    }

    // Getting github entered in input
    getGithub () {
        return this.github;
    }

     // Replacing employee role by engineer
    getRole () {
        return "Engineer";
    }
}

// Module exporting
module.exports = Engineer; 