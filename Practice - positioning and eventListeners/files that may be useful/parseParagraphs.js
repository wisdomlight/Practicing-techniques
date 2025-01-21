const fs = require('fs');

// Read the input HTML file
fs.readFile('input.html', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Log the content of the file (optional for debugging)
    // console.log('File content:', data);

    // Updated regular expression to match content inside <p> tags with flexibility for whitespace and newlines
    const regex = /<p\s*>(.*?)<\/p>/gs;  // Use 'gs' flags to match across lines
    let match;
    const paragraphs = [];

    // Use regex.exec() to find all matches and push them to the array
    while ((match = regex.exec(data)) !== null) {
        // Log each match to check the result
        // console.log('Match found:', match);

        // Push the text inside the <p> tags into the paragraphs array
        paragraphs.push({ text: match[1].trim() });  // Use .trim() to remove extra spaces
    }

    // Write the result to an output JSON file
    fs.writeFile('output.json', JSON.stringify(paragraphs, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Result written to output.json');
        }
    });
});
