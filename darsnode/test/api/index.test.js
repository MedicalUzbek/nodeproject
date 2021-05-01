const chai = require('chai');
const chaihttp = require('chai-http');
const should = chai.should();
const server = require('../../app')
chai.use(chaihttp);

describe('bosh sahifani testdan o`tqazdik' , () => {
    it('get method orqali bosh sahifani test qildik', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})




