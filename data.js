import fs from 'fs';

const users = [
  { name: 'Mike', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Nicola', age: 17 },
];

fs.writeFile('data.json', `{"users": ${JSON.stringify(users)}}`, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Data written to file');
  }
});
