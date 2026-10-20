function countVowels(text) {
  const vowels = 'aiueoAIUEO';

  let result = 0;
  for (char of text) {
    if (vowels.includes(char)) {
      result++;
    }
  }

  return result;
}

console.log(countVowels('Arrizal'));
console.log(countVowels('Umar'));
