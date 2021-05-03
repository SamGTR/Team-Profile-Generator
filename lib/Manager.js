// Employee constructor importing
const Employee = require('./Employee');

// Extending employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Employee constructor calling
        super (name, id, email);        
        this.officeNumber = officeNumber; 
    }

    // Replacing employee role by manager
    getRole () {
        return "Manager";
    }
}

// Module exporting
module.exports = Manager; 