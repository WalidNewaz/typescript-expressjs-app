import request from 'supertest';
import app, { server } from './server';

describe('Server', () => {
  afterAll((done) => {
    server.close(done);  // Close server after all tests
  });

  it('GET/ should return 200', (done) => {
    request(app)
      .get('/')
      .expect(
        200,
        'Hello World from TypeScript in Node.js using Express!',
        done,
      );
  });

  it('GET /greet/1 should return 500', (done) => {
    request(app)
      .get('/greet/1')
      .expect(500, done);
  });

  it('GET /greet/2 should return 200', (done) => {
    request(app)
      .get('/greet/2')
      .expect(200, 'Hello, Jane Doe! You drive a 2017 Mercedes GLE.', done);
  });

  it('GET /user/1 should return 500', (done) => {
    request(app)
      .get('/user/1')
      .expect(500, done);
  });

  it('GET /user/2 should return 200', (done) => {
    request(app)
      .get('/user/2')
      .expect(200, {
        id: 2,
        name: 'Jane Doe',
        car: {
          id: 3,
          make: 'Mercedes',
          model: 'GLE',
          year: 2017,
        },
      }, done);
  });
});
