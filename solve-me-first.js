const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input_stdin_array = [];
let input_currentline = 0;

rl.on('line', function (data) {
    input_stdin_array.push(data);
    if (input_stdin_array.length === 2) {
        rl.close();
    }
});

rl.on('close', function () {
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
    return a + b;
}

function main() {
    let a = parseInt(readLine());
    let b = parseInt(readLine());

    let res = solveMeFirst(a, b);
    console.log(res);
}
