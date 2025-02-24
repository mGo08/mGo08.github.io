// Fetch JSON data from the external file
fetch('data.json')
    .then(response => response.json()) // Convert response to JavaScript object
    .then(data => {
        console.log(data); // Log full JSON object
        console.log(data.name);   // Output: Alice
        console.log(data.age);    // Output: 25
        console.log(data.hobbies); // Output: ['reading', 'traveling', 'coding']
    })
    .catch(error => console.error('Error loading JSON:', error));
