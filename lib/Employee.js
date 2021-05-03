// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    //  Getting name entered in input
    getName () {
        return this.name;
    }

    //  Getting ID entered in input
    getId () {
        return this.id;
    }   

    //  Getting email entered in input
    getEmail () {
        return this.email;
    }

    // Getting role type entered in input
    getRole () {
        return 'Employee'; 
    }
};

// Module exporting
module.exports = Employee; 