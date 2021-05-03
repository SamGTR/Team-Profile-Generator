// Employee constructor importing
const Employee = require('./Employee');

// Extending employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Employee constructor calling
        super (name, id, email); 
        this.school = school; 
    }

    // Getting school name entered in input
    getSchool () {
        return this.school;
    }

    // Replacing employee role by intern
    getRole () {
        return "Intern";
    }
}

// Module exporting
module.exports = Intern; 