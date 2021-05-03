// Manager constructor 
const Manager = require('../lib/Manager');

// Testing manager object  
test('should create a Manager object', () => {
    const manager = new Manager('Sam', 48, 'sampatel@gmail', 5);
    
    expect(manager.officeNumber).toEqual(5);
});

// Testing getRole function
test('should get role of employee', () => {
    const manager = new Manager('Sam', 48, 'sampatel@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 