'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  const inputArray = [];
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req,res)=>{
    const {input} = req.query;
    // console.log(input)
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    let validUnit = true;
    let validNum = true;

    var km = /\bkm\b/i
    , mi = /\bmi\b/i
    ,kg = /\bkg\b/i
    ,lbs = /\blbs\b/i
    ,gal = /\bgal\b/i
    ,l = /\bl\b/i;
    if(km.test(initUnit)||mi.test(initUnit)||kg.test(initUnit)||lbs.test(initUnit)||gal.test(initUnit)||l.test(initUnit)){
    }else{
      validUnit = false;
    }
    // console.log(typeof num)
    if(isNaN(initNum)||initNum === undefined){
      // res.send('invalid number')
      validNum = false;
    }


    if(!validNum){
      if(!validUnit){
        res.send('invalid number and unit')
      }
      else{
        res.send('invalid number')
      }
    }
    else if(!validUnit){
      res.send('invalid unit')
    }
    // console.log(unit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    // const spellUnit = convertHandler.spellOutUnit(initUnit);
    const returnNum = convertHandler.convert(initNum,initUnit);
    // console.log(converted);

    const string  = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);

    // console.log(string)

    // if(isNaN(result)){
    //   console.log('nan');
    //   res.json({
    //     string: 'invalid number'
    //   })
    // }
    

    
    inputArray.push(input);
    console.log(input)
    // console.log('input ',input)
    // console.log('output ', string)

    res.json({"initNum":initNum,
    "initUnit":initUnit,
    "returnNum":returnNum,
    returnUnit,
    string
    });
  }
)

};
