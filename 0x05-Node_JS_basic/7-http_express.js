const express = require('express');
const { readFile } = require('fs');
const process = require('process');

const app = express();
const port = 1245;

// Function to read and process student data
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = info.split('\n').filter((line) => line.trim().length > 0);
      const output = [`Number of students: ${lines.length - 1}`];
      const fields = {};

      let isFirstLine = true;
      for (const line of lines) {
        if (isFirstLine) {
          isFirstLine = false;
          // eslint-disable-next-line no-continue
          continue; // Skip the header line
        }
        const student = line.split(',');
        const firstName = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        if (firstName !== 'firstname' && field) {
          fields[field].push(firstName);
        }
      }

      for (const field in fields) {
        if (field) {
          output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve(output.join('\n'));
    });
  });
}

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Students endpoint
app.get('/students', (req, res) => {
  res.status(200).write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

// Start the server
app.listen(port);

// Export the app
module.exports = app;
