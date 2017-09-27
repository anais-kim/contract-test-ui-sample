var request = require('supertest')

var contentApp = 'http://localhost:8989';

describe('GET /playlists/{id}', function () {
  it('should return display orientaion', function(done){
      request(contentApp)
        .get('/api/v1/playlists/888')
        .set('Content-Type', 'application/json')
        .expect(200, {
            display: {'orientation': 'vertical'}
        }, done);
  });
});
