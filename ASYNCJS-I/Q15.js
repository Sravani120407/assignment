const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

let countdownInterval = null;
let isRunning = false;

rl.question('Enter number of seconds to count down: ', (answer) => {
  const seconds = parseInt(answer);

  if (!seconds || seconds <= 0) {
    console.log('Please enter a valid number of seconds!');
    rl.close();
    return;
  }

  let remainingTime = seconds;
  isRunning = true;

  console.log(`\nStarting countdown from ${seconds} seconds...`);
  console.log(`Press 'S' key to stop the countdown\n`);

  countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      console.log('\nCountdown Complete!');
      isRunning = false;
      rl.close();
      process.exit();
    }
  }, 1000);
});

process.stdin.on('keypress', (str, key) => {
  if (key.name === 's' && isRunning) {
    setTimeout(() => {
      clearInterval(countdownInterval);
      console.log('\nCountdown stopped by user!');
      isRunning = false;
      rl.close();
      process.exit();
    }, 100);
  }

  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
});