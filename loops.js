function forLoop(array) {
  for(let i=0; i<25; i++){
    if(i==1){array.push("I am 1 strange loop.")}
    else{array.push(`I am ${i} strange loops.`)}
  }
  return array
}

//counts from 0 to 25 and prints a string for each loop

function whileLoop(n) {
  while (n > 0){
    console.log(--n)
  }
  return "done"
}
//countdown from random number(n) to 0 then return string "done"
function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= 0.5
  }
  do{
    array.pop()
  }
  while (array.length > 0 && maybeTrue());
  return array;
}
//remove elements from array until empty or until maybeTrue() returns false.
