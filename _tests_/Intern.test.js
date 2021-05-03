// Intern constructor 
const Intern = require('../lib/Intern');

// Testing intern object  
test('should create an Intern object', () => {
    const intern = new Intern('Sam', 48, 'sampatel@gmail', 'LAMAR');
    
    expect(intern.school).toEqual('LAMAR');
});

// Testing getSchool() function
test('should get employee school', () => {
    const intern = new Intern('Sam', 48, 'sampatel@gmail', 'LAMAR');
    
    expect(intern.getSchool()).toEqual('LAMAR');
});

// Testing getRole() function
test('should get role of employee', () => {
    const intern = new Intern('Sam', 48, 'sampatel@gmail', 'LAMAR');

    expect(intern.getRole()).toEqual('Intern');
}); 