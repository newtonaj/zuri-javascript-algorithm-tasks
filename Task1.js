function convertFahrToCelcius(p){
  if(isNaN(p)){
     if (Array.isArray(p)){
    console.log(JSON.stringify(p) + " is not a valid number but a/an array.")
  }
  else if (typeof(p)=='string'){
    console.log(p + " is not a valid number but a/an string.")
  }
  else if (typeof(p)=='object'){
    console.log(JSON.stringify(p) + " is not a valid number but a/an object.")
  }
  
 } 
 
  else{
let ans = (p -32)*5/9
console.log(ans.toFixed(4))
}
}

convertFahrToCelcius({temp:0})