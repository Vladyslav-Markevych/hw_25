function countVowels(char) {
  let count = 0;
  let letters = ["a", "e", "i", "o", "u", "y"];

  for (char of char) {
    char = char.toLowerCase();
    for (let i = 0; i < 6; i++) {
      if (char == letters[i]) {
        count++;
      }
    }
  }
  console.log(`Кількість голосних: ${count}`);
}

countVowels("Hello World"); // 3
countVowels("My dear WATSON!"); // 5
