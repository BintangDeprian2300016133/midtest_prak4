// Function to generate the password based on user input
const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // Create a variable for the character set based on selected options
    let charPool = '';
    if (options.includeUppercase) charPool += uppercase;
    if (options.includeLowercase) charPool += lowercase;
    if (options.includeNumbers) charPool += numbers;
    if (options.includeSpecialChars) charPool += specialChars;

    // If no character set is selected, return an error message
    if (charPool === '') {
        alert('Please select at least one character set.');
        return '';
    }

    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    
    return password;
};

// Event listener for generating the password
document.getElementById('generateBtn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    // Pass user options to the generatePassword function
    const options = {
        includeUppercase: includeUppercase,
        includeLowercase: includeLowercase,
        includeNumbers: includeNumbers,
        includeSpecialChars: includeSpecialChars
    };

    // Generate and display the password
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});

// BONUS: Copy password to clipboard
document.getElementById('copyBtn').addEventListener('click', function() {
    const password = document.getElementById('passwordOutput').textContent;
    
    // Check if there is a password to copy
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy. Generate a password first.');
    }
});
