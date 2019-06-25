const fs = require('fs');

fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if(err) {
    // handle erro reasonalby
    console.error(err);
    return;
  }
  console.log(data);
});
