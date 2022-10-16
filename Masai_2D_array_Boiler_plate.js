function runProgram(input) {
  input = input.trim().split("\n");
  let len=+input[0]
  let line=1;
  let mat=[];
  for(var i=0;i<len;i++){
      let arr=input[line++].trim().split(" ").map(Number)
      mat.push(arr)
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
