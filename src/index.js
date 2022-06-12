import * as readline from "readline";

const username = process.argv[2].split("=")[1];

console.log(`Welcome to the File Manager, ${username}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', async (input) => {
  console.log("Command - " + input);
  if (input === ".exit") {
    console.log(`Thank you for using File Manager, ${username}!`);
    rl.close();
  }
})