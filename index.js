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

function makeInt(a){
  return parseInt(a,10);
}

function preserveDecimal(a) {
  return parseFloat(a)
}