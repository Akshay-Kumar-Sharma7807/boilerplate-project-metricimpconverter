function ConvertHandler() {
  
  this.getNum = function(input) {
    let numString = input.split(/[a-z]/i)[0];
    if(numString===''){return 1};
    // console.log(numString)

    let numArray = numString.split('');
    // console.log(numArray)
    var numRegex = /[0-9|.|/]/;
    var count = 0;
    var divideCount = 0;
    numArray.map((value,index)=>{

      if(numRegex.test(value)){
        // console.log('num')
        if(value==='/'){
          divideCount++;
        }
        }
      else{count++}
    })
    // console.log(count);
    if(count>=1 || divideCount>1){
      result = undefined;
    }
    else{
    result = eval(numString);
    }
    // console.log(result)
    if(result<=0 || result===undefined ){
      result='invalid number';
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let unit = input.split(/[0-9]/);
    let result = unit[unit.length-1].toLowerCase();
    // console.log(result)
    if(result === 'l'){
      result= 'L'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    var km = /km/i
    , mi = /mi/i
    ,kg = /kg/i
    ,lbs = /lbs/i
    ,gal = /gal/i
    ,l = /l/i;

    if(km.test(initUnit)){
      result = 'mi'
    }
    else if(mi.test(initUnit)){
      result = 'km'
    }
    else if(kg.test(initUnit)){
      result = 'lbs'
    }
    else if(lbs.test(initUnit)){
      result = 'kg'
    }
    else if(gal.test(initUnit)){
      result = 'L'
    }
    else if(l.test(initUnit)){
      result = 'gal'
    }
    else{
      result = 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    var km = /km/i
    , mi = /mi/i
    ,kg = /kg/i
    ,lbs = /lbs/i
    ,gal = /gal/i
    ,l = /l/i;
    
    if(km.test(unit)){
      result = 'kilometers'
    }
    else if(mi.test(unit)){
      result = 'miles'
    }
    else if(kg.test(unit)){
      result = 'kilograms'
    }
    else if(lbs.test(unit)){
      result = 'pounds'
    }
    else if(gal.test(unit)){
      result = 'gallons'
    }
    else if(l.test(unit)){
      result = 'liters'
    }
    else{
      result = 'invalid unit';
    }

    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = 0;
    var km = /km/i
    , mi = /mi/i
    ,kg = /kg/i
    ,lbs = /lbs/i
    ,gal = /gal/i
    ,l = /l/i;

    if(gal.test(initUnit)){
      result = (initNum * galToL).toFixed(5);
    }
    else if(kg.test(initUnit)){
      result = (initNum/lbsToKg).toFixed(5);
    }
    else if(lbs.test(initUnit)){
      result = (initNum*lbsToKg).toFixed(5);
    }
    else if(km.test(initUnit)){
      result = (initNum/miToKm).toFixed(5);
    }
    else if(mi.test(initUnit)){
      result = (initNum*miToKm).toFixed(5);
    }
    else if(l.test(initUnit)){
      result = (initNum/galToL).toFixed(5);
    }
    else{
      result = 0;
    }

    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);
    let result =`${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
