// server.test.js
const request = require('supertest');
const app = require('../src/server/server.js');

describe('Test the root path', () => {
    it('should respond with a status of 200 on the root path', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
