const { readFile } = require('fs');
const process = require('process');
const { createServer } = require('http');

const port = 1245;

function index(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = info.split('\n').filter((line) => line.length > 0);

        const output = [`Number of students: ${lines.length - 1}`];

        const fields = {};
        let isFirstLine = true;
        for (const line of lines) {
          if (isFirstLine) {
            isFirstLine = false;
            continue; // eslint-disable-line
          }
          const student = line.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          if (student[0] !== 'firstname' && student[3]) {
            fields[student[3]].push(student[0]);
          }
        }
        for (const field in fields) {
          if (field) {
            output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve(output.join('\n'));
      }
    });
  });
}

function outputStudents(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    index(req, res);
  } else if (req.url === '/students') {
    outputStudents(req, res);
  }
})
  .listen(port);

module.exports = app;
