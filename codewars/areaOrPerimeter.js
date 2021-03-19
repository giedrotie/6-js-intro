
const areaOrPerimeter = function(l , w) {
  if (l === w) {
  const area = l * w;
  return area;
  
} if (l !== w) {
      let perimetras = (l + w)*2;
      return perimetras;
    }
  }


console.log(areaOrPerimeter(4 , 4), '->', '16');
console.log(areaOrPerimeter(6 , 10), '->', '32');
