'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the things service', () => {
  test('GET /timeline?1 succeeds', () => {
    return request(app)
	    .get('/timeline?1')
	    .expect(200);
  });

  test('GET /club?1 succeeds', () => {
    return request(app)
	    .get('/club?1')
	    .expect(200);
  });

  test('GET /match?1 succeeds', () => {
    return request(app)
	    .get('/match?1')
	    .expect(200);
  });

  test('GET /comments?1 succeeds', () => {
    return request(app)
	    .get('/comments?1')
	    .expect(200);
  });


  test('GET /club returns JSON', () => {
    return request(app)
	    .get('/club')
	    .expect('Content-type', /json/);
  });

  test('GET /comments?1 returns JSON', () => {
    return request(app)
	    .get('/comments?1')
	    .expect('Content-type', /json/);
  });

//   test('GET /club?1 includes 2023 to 2024', () => {
//     return request(app)
// 	    .get('/club1')
// 	    .expect(/2023 to 2024/);
//   });

//   test('POST /newcomment succeeds', () => {
//     const params = 'test';
//     return request(app)
//       .post('/newcomment')
//       .send(params)
// 	    .expect(200);
//   });
});
