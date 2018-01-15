

const command = require("./command.js")

const done = (output) => {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ');
}


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  let input = cmd.split(' ')
  let args = input.slice(1)
  args.unshift(done)
  command[input[0]].apply(null, args)
  // remove the newline
  // if (cmd === 'pwd'){
  //   command.pwd()
  // }
  // if (cmd === 'date'){
  //   command.date()
  // }
  // if (cmd === 'ls'){
  //   command.ls()
  // }
  // let arr = cmd.split(' ')
  // if (arr[0] === 'echo'){
  //   command.echo(arr.slice(1).join(' '))
  // }
  // if (arr[0] === 'cat'){
  //   command.cat(arr[1])
  // }
  // if (arr[0] === 'head'){
  //   command.head(arr[1], arr[2])
  // }
  // if (arr[0] === 'tail'){
  //   command.tail(arr[1], arr[2])
  // }
  // if (arr[0] === 'curl'){
  //   command.curl(arr[1])
  // }
  // //process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

});

//  const funcs = {pwd: command.pwd, date: command.date, ls: command.ls, echo: command.echo, cat: command.cat, tail: command.tail, head: command.head, curl: command.curl}

