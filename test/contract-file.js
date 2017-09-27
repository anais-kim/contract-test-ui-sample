var request = require('supertest')

var fileApp = 'http://localhost:8787';

describe('GET /folders', function () {
  it('should return folder id', function(done){
      request(fileApp)
        .get('/api/v1/folders')
        .set('Content-Type', 'application/json')
        .query({ type: 'root' })
        .expect(200, {
          id: '334535'
        }, done);
  });
});

describe('GET /media/{id}', function () {
  it('should return media id and type', function(done){
      request(fileApp)
        .get('/api/v1/media/111')
        .set('Content-Type', 'application/json')
        .expect(200, {
          id: '111',
          type: 'image'
        }, done);
  });
});
