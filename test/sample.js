var request = require('supertest')

it('GET /folders', function(done){
    request('http://localhost:8787')
      .get('/api/v1/folders')
      .set('Content-Type', 'application/json')
      .query({ type: 'root' })
      .expect(200, {
        id: '334535'
      }, done);
});
