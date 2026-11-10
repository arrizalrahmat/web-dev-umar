// cara 1 baca json
// const users = require('./user.json');

// console.log(users, '<< ini hasilnya');

// cara 2 baca json pakai fs
const fs = require('fs');
const users = fs.readFileSync('./user.json', 'utf-8');
const parsedUsers = JSON.parse(users);
// console.log(parsedUsers, '<< ini hasilnya');
const newUser = {
  id: 3,
  name: 'Bob Johnson',
  email: 'bob.johnson@example.com',
};

parsedUsers.push(newUser);
fs.writeFileSync(
  './user.json',
  JSON.stringify(parsedUsers, null, 4),
  'utf-8',
);
console.log('New user added successfully!');
