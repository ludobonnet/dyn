const request = require('supertest');
const server = require('../server.js');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
});
