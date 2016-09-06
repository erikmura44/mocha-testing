const chai = require('chai');
const supertest = require('supertest');

const app = require('../app.js');

const should = chai.should();
const api = supertest(app);


describe('Sending a POST to /api/div', function(){
  describe('should succeed', function(){
    it('in dividing two numbers together', function(done){
      api.post('/api/div')
        .send({
          num1: 6,
          num2: 2
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal(3);

          done();
        });
    });
    it('in dividing two numbers together', function(done){
      api.post('/api/div')
        .send({
          num1: 56088,
          num2: 123
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal(456);

          done();
        });
    });
  });

  describe('should fail', function(){
    it('when nothing is sent in', function(done){
      api.post('/api/div')
      .expect(432)
      .end((err, res)=>{
        if(err) return done(err);

        res.body.message.should.be.equal('No data fool');

        done();
      });
    });
    it('when the input is not a number', function(done){
      api.post('/api/div')
      .send({
        num1: 'w',
        num2: 14
      })
      .expect(432)
      .end((err, res)=>{
        if(err) return done(err);

        res.body.fail.should.be.equal('Input is not a number');

        done();
      });
    });
  });
});
