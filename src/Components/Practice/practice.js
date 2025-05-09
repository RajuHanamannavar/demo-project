function secondLargest(arr) {
  let unique = [...new Set(arr)];
  if (unique.length < 2) return null;
  return unique.sort((a, b) => b - a)[2];
}

console.log(secondLargest([10, 5, 8, 20, 3]));   
console.log(secondLargest([4, 4, 4]));          
console.log(secondLargest([1]));                
