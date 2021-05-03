// Engineer constructor 
const Engineer = require('../lib/Engineer');

// Testing engineer object  
test('should create an Engineer object', () => {
    const engineer = new Engineer('Sam', 48, 'sampatel@gmail', 'samGTR');
    
    expect(engineer.github).toEqual('samGTR');
});

// Testing getGithub() function
test('should get engineer github profile name', () => {
    const engineer = new Engineer('Sam', 48, 'sampatel@gmail', 'samGTR');

    expect(engineer.getGithub()).toEqual('samGTR');
});

// Testing getRole() function
test('should get role of employee', () => {
    const engineer = new Engineer('Sam', 48, 'sampatel@gmail', 'samGTR');

    expect(engineer.getRole()).toEqual('Engineer');
});