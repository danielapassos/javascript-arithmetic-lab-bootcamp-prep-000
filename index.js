var a,b

function add(a,b){
  a+=b;
  console.log(a)
}

function subtract(a,b){
  a-=b;
  console.log(a)
}

function multiply(a,b){
  a*=b;
  console.log(a)
}

function divide(a,b){
  a/=b;
  console.log(a)
}

function inc(a){
  return a++;
}

function dec(a){
  return a--;
}

function makeInt(a,b){
  if('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  if('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  if('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  });
}
}

function preserveDecimal(a) {
  return a
}