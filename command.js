
const fs = require('fs')
const request = require('request')
module.exports = {
  pwd: (done, input) => done(process.env.PWD),
  date: (done, input) => done(Date()),
  ls: (done, input) => {
    fs.readdir('.', function(err, files) {
    let returnFiles = ''
    if (err) throw err;
    files.forEach(function(file) {
      returnFiles += file.toString() + "\n";
    })
    done(returnFiles)
    // process.stdout.write("prompt > ");
  });
},
  echo: (done, input) => done(input),
  cat: (done, input) => {
    process.stdout.write(arguments[0] + '\n')
    fs.readFile(input.toString(), (err, data) => {
    if (err){
      throw err
    }
    done(data)
  })
},
  head: (done, input, n = 5) => {
    fs.readFile(input, (err, data) => {
      if (err){
        throw err
      }
      n = Number(n)
      data = data.toString()
      let arr = data.split('\n')
      let head = ' '
      for (let i = 0; i < n; i++){
        head += arr[i] + '\n'
      }
      done(head)
    })
  },
    tail: (done, input, n = 5) => {
    fs.readFile(input, (err, data) => {
      if (err){
        throw err
      }
      n = Number(n)
      data = data.toString()
      let arr = data.split('\n')
      let tail = ' '
      for (let i = 0; i < n; i++){
        tail += arr[arr.length - n + i] + '\n'
      }
      done(tail)
    })
  },
  curl: (done, input) => {
    request(input, (error, response, body) => {
      if (error){
        throw error
      }
      done(body)
    })
  }

}
