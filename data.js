import fs from 'fs';
import path from 'path';
import os from 'os';
import { promises } from 'fs';

//--------1---------
const users = [
  { name: 'Mike', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Nicola', age: 17 },
];

//--------2---------
// fs.writeFile('data.json', `{"users": ${JSON.stringify(users)}}`, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Data written to file');
//   }
// });

//--------2---------
// fs.writeFile(
//   `${path.join(os.homedir(), '/user.js')}`,
//   `${JSON.stringify(users)}`,
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Data written to file');
//     }
//   }
// );

//--------3---------
const newData = [
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 52 },
];

//--------4---------

async function readData() {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      throw err;
    }
    let { users } = JSON.parse(data);

    newData.map((item) => users.push(item));
    fs.writeFile('data.json', `{"users": ${JSON.stringify(users)}}`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data written to file');
      }
    });
  });
}
readData();
// dataFromDataJson = await
// console.log(dataFromDataJson);
