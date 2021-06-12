const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Should return correct',(done)=>{
    chai.request(server)
    .get('/api/convert/?input=1gal')
    .end((err,res)=>{
      assert.equal(res.status, 200);
      assert.equal(res.body.string, "1 gallons converts to 3.78541 liters");
      done();
    })
  })
  test('Without Number',(done)=>{
    chai.request(server)
    .get('/api/convert/?input=gal')
    .end((err,res)=>{
      assert.equal(res.status, 200);
      assert.equal(res.body.string, "1 gallons converts to 3.78541 liters");
      done();
    })
  })
  test('Without unit',(done)=>{
    chai.request(server)
    .get('/api/convert/?input=1')
    .end((err,res)=>{
      assert.equal(res.status, 200);
      assert.equal(res.text, "invalid unit");
      done();
    })
  })
  test('Without anything',(done)=>{
    chai.request(server)
    .get('/api/convert/?input=')
    .end((err,res)=>{
      assert.equal(res.status, 200);
      assert.equal(res.text, "invalid unit");
      done();
    })
  })
  test('With invalid number',(done)=>{
    chai.request(server)
    .get('/api/convert/?input=1//2gal')
    .end((err,res)=>{
      assert.equal(res.status, 200);
      assert.equal(res.text, "invalid number");
      done();
    })
  })
});
