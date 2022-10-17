// 2
// 5
// 1 2 3 4 5
// 4 5 3 2 1
// 5
// 1 2 3 4 5
// 4 3 5 1 2
function runProgram(input) {
  input = input.trim().split("\n");
  let tc=+input[0];
  let line=1;
  let arr1=[];
  let arr2=[];
  for(var i=0;i<tc;i++){
      let n=+input[line++];
      arr1=input[line++].trim().split(" ").map(Number)
      arr2=input[line++].trim().split(" ").map(Number)
      
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
