const supertest = require('supertest')

const profile1 = require('../server')

const db = require('../data/dbConfig')








describe("Profile model", function () {
    describe("add()", function () {
        beforeEach(async () => {
            await db('profile').truncate();
        });
            ///Post Register test


        it('post register /register shold return status 201 code', () =>{
            return supertest(profile1)
            .post('/api/auth/register')
            .send({email: 'mikey@gmail.com', password: 'password'})
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
        it('post register /register shold return status 400 code', () =>{
            return supertest(profile1)
            .post('/api/auth/register')
            .send({email: 'mikey'})
            .then(res => {
                expect(res.status).toBe(400)
            })
        })
     })
 })
        
    
