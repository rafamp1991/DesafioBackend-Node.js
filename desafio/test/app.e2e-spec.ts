import * as request from 'supertest';

const app = 'http://localhost:3000';

describe('ROOT ()', () => {
  it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
