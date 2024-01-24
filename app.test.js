'use strict';

const request = require('supertest');
const app = require('./app');

describe('Testing GET and POST requests', () => {
  test('GET /timeline succeeds', () => {
    return request(app)
	    .get('/timeline')
	    .expect(200);
  });

  test('GET /timeline element that exists', () => {
    return request(app)
	    .get('/timeline?1')
	    .expect(/du1s.JPG/);
  });

  test('GET /timeline element that doesnt exist', () => {
    return request(app)
	    .get('/timeline?5')
	    .expect('');
  });


  test('GET /club succeeds', () => {
    return request(app)
	    .get('/club')
	    .expect(200);
  });

  test('GET /club element that exists', () => {
    return request(app)
	    .get('/club?1')
	    .expect(/Durham University Women's first team/);
  });

  test('GET /club element that doesnt exist', () => {
    return request(app)
	    .get('/club?5')
	    .expect([]);
  });


  test('GET /match succeeds', () => {
    return request(app)
	    .get('/match')
	    .expect(200);
  });

  test('GET /match element that exists', () => {
    return request(app)
	    .get('/match?1')
	    .expect(/Stirling 1s/);
  });

  test('GET /match element that doesnt exist', () => {
    return request(app)
	    .get('/match?11')
	    .expect([]);
  });

  test('GET /comments succeeds', () => {
    return request(app)
	    .get('/comments')
	    .expect(200);
  });

  test('GET /timeline returns text', () => {
    return request(app)
	    .get('/timeline')
	    .expect('Content-type', /text/);
  });


  test('GET /club returns JSON', () => {
    return request(app)
	    .get('/club')
	    .expect('Content-type', /json/);
  });

  test('GET /match returns JSON', () => {
    return request(app)
	    .get('/match')
	    .expect('Content-type', /json/);
  });

  test('GET /comments returns JSON', () => {
    return request(app)
	    .get('/comments')
	    .expect('Content-type', /json/);
  });

  test('POST /newcomment succeeds', async () => {
    const params = {date:'24/01/24', comment:'newComment'};
    const response = await request(app)
      .post('/newcomment')
      .send(params);
	expect(response.status).toBe(200);
  });

  test('POST /newcomment and GET /comment succeeds', async () => {
    const params = {date:'24/01/24', comment:'newComment2'};
    const response = await request(app)
      .post('/newcomment')
      .send(params);
	expect(response.status).toBe(200);
    return request(app)
        .get('/comments?10')
        .expect(/newComment2/);
  });

});
