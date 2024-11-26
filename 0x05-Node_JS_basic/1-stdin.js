require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Start reading from stdin
process.stdin.resume();
process.stdin.setEncoding('utf-8');

// Listen for 'data' event to capture the user's input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name != null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Listen for the 'end' event to handle piped input and print the closing message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
