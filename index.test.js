const copyFile = require('./index');

describe('copyFile function test', () => {
  beforeEach(() => {
    // write a new file to copy
    fs.writeFile('./whale-stats', 'Whale stats', err => {
      if(err) return console.error(err);
    });
  });
  
  afterEach(() => {
    // delete or unlink written file
    fs.unlink('./whale-stats', err => {
      if(err) return console.error(err);
    });
    // delete or unlink copied file
    fs.unlink('./whale-study', err => {
      if(err) return console.error(err);
    });
  });

  it('copies certain file', () => {

  });
});
