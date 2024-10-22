// Dont change anything in this file
const { execSync } = require('child_process');

try {
    // Run tests
    execSync('npm test', { stdio: 'inherit' });
    console.log('All tests passed!');

} catch (error) {
    console.error('Some tests failed.');
    process.exit(1); // Exit with failure
}
