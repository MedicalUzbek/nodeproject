const chai = require('chai');
const chaihttp = require('chai-http');
const {token} = require('morgan');
const should = chai.should();
const server = require('../../app')
chai.use(chaihttp);

describe('music saifani test qildik' , () => {
    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({username: 'bahrom', password: '12345'})
        .end((err, res) => {
            const token = res.body.token
            console.log(token);
            done()
        })
    })

    describe('get music' , () => {
        it('get method orqali musicni tekshirdik' , (done) => {
            chai.request(server)
            .get('/music')
            .send('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                done()
            })

        })
    })
    // post method orqali yangi malumot kiritishni test qilish
    describe('post music' , () => {
        it('post method orqali musicni tekshirdik' , (done) => {
            
            const music = {
                title: 'shaxzodani qo`shig`i',
                category: 'bilmadim',
                country: 'uzbek',
                year: 1890,
                director_id: '608184c24135c02e20cceccb',
                imdb_score: 2
            }

            chai.request(server)
            .post('/music')
            .send(music)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('title')
                res.body.should.have.property('category')
                res.body.should.have.property('country')
                res.body.should.have.property('year')
                res.body.should.have.property('director_id')
                res.body.should.have.property('imdb_score')
                done()
            })

        })
    })
})


