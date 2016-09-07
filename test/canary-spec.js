const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('Canary test', function(){
  it('The string hello should be hello', function(){
    const hello = 'hello';

    hello.should.be.equal('hello');
  });
  
  it('typeof string should be string', function(){
    const str = 'qowniqn';

    str.should.be.a('string');
    expect(str).to.be.a('string');
    assert.typeOf(str, 'string');
  });
});
