function findLongestWord(text) {
  let arr = [0];
  let firstLetter;
  let lastLetter;
  let count = 0;

  for (let char of text) {
    count++;
    if (char == " ") {
      arr.push(count);
    }
  }
  arr.push(text.length);
  //   console.log(arr);
  let k = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    k++;
    if (arr[i] < arr[k] - 1 - maxCount) {
      maxCount = arr[k] - 1 - arr[i];
      firstLetter = arr[i];
      lastLetter = arr[k];
    }
    // console.log(maxCount);
  }

  console.log(`Найбільше слово: ${text.slice(firstLetter, lastLetter)}
Кількість символів: ${maxCount}`);
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // jumped
