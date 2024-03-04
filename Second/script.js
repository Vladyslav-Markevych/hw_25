function moveOver(arr, param) {
  param = param.toLowerCase();
  if (param == "end") {
    test = arr.shift();
    arr.push(test);
    console.log(arr);
  }
  if (param == "start") {
    test = arr.pop();
    arr.unshift(test);
    console.log(arr);
  }
}

moveOver([1, 2, 3, 4], "end"); // [2,3,4,1]
moveOver([1, 2, 3, 4], "start"); // [4,1,2,3]
