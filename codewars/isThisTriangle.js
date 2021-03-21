// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript


function isTriangle(a,b,c){
    if ( a === 0|| b === 0 || c === 0){
        return false;
    } else if ( a + b <= c){
        return false;
    } else if ( a + c <= b){
        return false;
    }   else if ( b + c <= a){
        return false;
    }
        return true;
}
  


    console.log(isTriangle(1,2,2),'->', 'true');
    console.log(isTriangle(7,2,2),'->', 'false');