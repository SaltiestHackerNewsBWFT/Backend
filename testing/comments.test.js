const supertest = require('supertest')

const comments = require('../server')

const db = require('../data/dbConfig')



describe("server test", function () {
    it("runs the tests", function () {
        expect(true).toBe(true);
    });

    describe("GET /", function () {
        it("should respond with 200 OK", function () {
            return supertest(comments)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it("should respond with JSON", function () {
            return supertest(comments)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });

        it("should respond with api: 'server is up'", function () {
            return supertest(comments)
                .get("/")
                .then(res => {
                    expect(res.body).toBe('server is up');
                });
        });

        
    });
});