// Employee constructor 
const Employee = require('../lib/Employee');

// Testing employee object 
test('should create an employee object', () => {
    const employee = new Employee('Sam', 48, 'sampatel@gmail');

    expect(employee.name).toEqual('Sam');
    expect(employee.id).toEqual(48);
    expect(employee.email).toEqual('sampatel@gmail');
});

// Testing getName() function
test('should get employee name', () => {
    const employee = new Employee('Sam', 48, 'sampatel@gmail');

    expect(employee.getName()).toEqual('Sam');
});

// Testing getId() function
test('should get employee ID', () => {
    const employee = new Employee('Sam', 48, 'sampatel@gmail');

    expect(employee.getId()).toEqual(48);
});

// Testing getEmail() function
test('should get employee email', () => {
    const employee = new Employee('Sam', 48, 'sampatel@gmail');

    expect(employee.getEmail()).toEqual('sampatel@gmail');
});

// Testing getRole() function
test('should get role of employee', () => {
    const employee = new Employee('Sam', 48, 'sampatel@gmail');

    expect(employee.getRole()).toEqual('Employee');
}); 

