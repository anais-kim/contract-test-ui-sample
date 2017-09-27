var request = require('supertest')
var assert = require('assert')

var app = 'http://localhost:8989';

describe('GET /playlists/{id}', function () {
  it('should return display orientaion', function(done){
      request(app)
        .get('/api/v1/playlists/888')
        .set('Content-Type', 'application/json')
        .expect(200, done);
  });
});
