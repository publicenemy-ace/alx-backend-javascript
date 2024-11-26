const fs = require('fs').promises;

async function countStudents(path) {
  const results = [];
  const fieldCount = {};

  try {
    const data = await fs.readFile(path, 'utf8');
    if (data) {
      // split the file content into lines
      const lines = data.split('\n');

      // skip the header line and process each subsequent line
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          // split the line by comma
          const [firstName, lastName, age, field] = line.split(',');

          // push the student data (each student object) into results
          results.push({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            age: age.trim(),
            field: field.trim(),
          });

          // count students in each field
          if (fieldCount[field]) {
            fieldCount[field].count += 1;
            fieldCount[field].students.push(firstName.trim());
          } else {
            fieldCount[field] = {
              count: 1,
              students: [firstName.trim()],
            };
          }
        }
      }
    }

    // Total number of students
    const totalStudents = results.length;
    console.log(`Number of students: ${totalStudents}`);

    // print number of studetns in each field
    for (const [field, { count, students }] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
