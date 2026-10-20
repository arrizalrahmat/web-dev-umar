const languages = [
  'javascript',
  'python',
  'javascript',
  'java',
  'c',
  'javascript',
  'c',
];
const result = {};

for (let i = 0; i < languages.length; i++) {
  const item = languages[i];
  // kalau result[item] ada, increment 1
  if (result[item]) {
    result[item] += 1;
    //kalau result[item] tidak ada, set 1
  } else {
    result[item] = 1;
  }
}

console.log(result);
