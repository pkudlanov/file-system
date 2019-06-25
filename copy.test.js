const fs = require('fs');
const copyFile = require('./copy');

describe('copyFile function test', () => {
  beforeEach(done => {
    // write a new file to copy
    fs.writeFile('./whale-stats', 'Whale stats', done);
  });
  
  afterEach(done => {
    // delete or unlink written file
    fs.unlink('./whale-stats', done);
    // delete or unlink copied file
    fs.unlink('./whale-study', done);
  });

  it('copies certain file from src to dest', (done) => {
    // copyFile(src, dest, callback)
    const src = './whale-stats';
    const dest = './whale-study';
    copyFile(src, dest, err => {
      expect(err).toBeFalsy();
      fs.readFile(dest, { encoding: 'utf8' }, (err, data) => {
        expect(data).toEqual('Whale stats');
        done(err);
      });
    });
  });
});
