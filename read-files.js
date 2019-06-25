const fs = require('fs');

fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if(err) return console.error(err);
  console.log(data);
  fs.writeFile('./greeting', data, err => {
    if(err) return console.error(err);
  });
});
