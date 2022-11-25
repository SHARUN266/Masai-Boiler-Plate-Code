function runProgram(input) {
  input = input.trim().split("\n");
  let line=1;
  for(var i=0;i<+input[0];i++){
      let len=+input[line++];
      let arr=input[line++].trim().split(" ").map(Number)
  }




  
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
