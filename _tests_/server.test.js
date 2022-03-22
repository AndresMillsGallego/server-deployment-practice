'use strict';

const supertest = require('supertest');
const app = require('../server/app.js');
const request = supertest(app);

describe('Testing our HTTP API', () => {
  it('Respond with a status code 200 to a successful GET request to the /hello route', async () => {
    const response = await request.get('/hello');
    expect(response.status).toEqual(200);
  });
});

describe('Testing our HTTP API', () => {
  it('Respond with a status code 200 to a successful GET request to the / home route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});