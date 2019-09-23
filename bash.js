const {printCWD} = require("./pwd")
const {ls} = require("./ls")
const {cat} = require('./cat')

process.stdout.write("prompt> ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
    if (cmd === "pwd") {
        printCWD();
    } else if (cmd === "ls") {
        ls();
    } else if (cmd.slice(0,3) === "cat") {
        const file = cmd.slice(4);
        console.log(file)
        cat(file)
    }
});

