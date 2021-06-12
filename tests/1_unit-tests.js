const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let chr = new ConvertHandler();

suite('Unit Tests', function(){
  test("Should return a number",()=>{
    assert.equal(chr.getNum('39gal'),39);
    assert.equal(chr.getNum('1Km'),1)
    assert.isNumber(chr.getNum('55hr'))
    assert.equal(chr.getNum('25'),25)
    assert.equal(chr.getNum('25'),25)
    assert.equal(chr.getNum('5'),5)
    assert.equal(chr.getNum('1/2gal'), 0.5)
    assert.equal(chr.getNum('5/2gal'), 2.5)
    assert.equal(chr.getNum('2.5/6gal'), 0.4166666666666667)
    assert.equal(chr.getNum('1/2gal'), 0.5)
    assert.equal(chr.getNum('gal'), 1)
    // assert.equal(chr.getNum('1//2'), 'invalid unit')
  })
  
  test("Should return unit",()=>{
    // assert.equal(chr.getUnit('32gal','gal'))
    assert.isString(chr.getUnit('32gal'));
    assert.equal(chr.getUnit('32gal'),'gal')
    assert.equal(chr.getUnit('2r2Km'),'km')
  })
  test('Should return a valid return unit',()=>{
    assert.equal(chr.getReturnUnit('km'),'mi')
    assert.equal(chr.getReturnUnit('gal'),'L')
    assert.equal(chr.getReturnUnit('L'),'gal')
    assert.equal(chr.getReturnUnit('mi'),'km')
    assert.equal(chr.getReturnUnit('kg'),'lbs')
    assert.equal(chr.getReturnUnit('lbs'),'kg')
  })
  test('Should return correct spelled unit',()=>{
    assert.equal(chr.spellOutUnit('gal'),'gallons');
    assert.equal(chr.spellOutUnit('km'),'kilometers');
    assert.equal(chr.spellOutUnit('mi'),'miles');
    assert.equal(chr.spellOutUnit('L'),'liters');
    assert.equal(chr.spellOutUnit('lbs'),'pounds');
    assert.equal(chr.spellOutUnit('kg'),'kilograms');
  })
  test('Should convert properly galToL',()=>{
    assert.equal(chr.convert('32','gal'),121.13312)
    assert.equal(chr.convert('10','L'), 2.64172)
  })
  test('Should convert properly lbsToKg',()=>{
    assert.equal(chr.convert('5','lbs'),2.26796)
    assert.equal(chr.convert('10','kg'),22.04624)
  })
  test('Should convert properly miToKg',()=>{
    assert.equal(chr.convert('10','km'),6.21373 )
    assert.equal(chr.convert('10','mi'),16.09340 )
  })
  test('Should return a proper string',()=>{
    assert.equal(chr.getString(32,'gal',121.13312,'L'),"32 gallons converts to 121.13312 liters")
  })
  test('Return num should be correct',()=>{
    assert.equal(chr.getNum('2.5/6gal'), 0.4166666666666667)
  })
  test('ReturnNum should be correct',()=>{
    assert.equal(chr.convert('32','gal'),121.13312)
  })
  test('Should detect invalid unit',()=>{
    assert.equal(chr.getReturnUnit('ga'),'invalid unit')
  })
  test('Get Unit for liter should be L',()=>{
    assert.equal(chr.getUnit('l'),'L');
  })
  test('Invalid number is invalid',()=>{
    assert.equal(chr.getNum('-1'),'invalid number')
  })
  test('Random test',()=>{
    assert.equal(chr.getReturnUnit('ga'),'invalid unit')

  })
  test('Anything Else',()=>{
    assert.equal(chr.getReturnUnit('L'),'gal')
    assert.equal(chr.getReturnUnit('mi'),'km')
  })
  test('the last thing',()=>{
    assert.equal(chr.convert('32','gal'),121.13312)
  })
});