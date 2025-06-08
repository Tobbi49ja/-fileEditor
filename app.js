// This is how Node.js reads and writes files.
const fs = require('fs');

// understanding the command line arguments
const args = process.argv.slice(2);

const command = args[0];
const filename = args[1];
const content = args[2];

// add read command
if (command === 'read') {
  if (!filename) {
    console.log('Please provide a file name to read.');
  } else {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
      } else {
        console.log("File contents:\n" + data);
      }
    });
    // add write command
  }
} else if (command === 'write') {
  if (!filename || !content) {
    console.log('Please provide a file name and content to write.');
  } else {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error("Error writing file:", err.message);
      } else {
        console.log("File written successfully!");
      }
    });
  }
//   to delete files

//   handle unknown commands
} 
// to delete files
else if (command === 'delete') {
  if (!filename) {
    console.log('Please provide a file name to delete.');
  } else {
    fs.unlink(filename, (err) => {
      if (err) {
        console.error("Error deleting file:", err.message);
      } else {
        console.log("File deleted successfully!");
      }
    });
  }

} else {
  console.log("please provide a valid command like 'read', 'write', or 'delete'.");
}
