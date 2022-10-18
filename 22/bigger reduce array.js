const array1 = [1, 2, 3, 5, 4, 8, 2];


const bigger = array1.reduce(
  (previousValue, currentValue) => {
      if(currentValue>previousValue){
    console.log(`IF previousValue: ${previousValue} - currentValue: ${currentValue}`);
  return currentValue;
}
    console.log(`NO IF previousValue: ${previousValue} - currentValue: ${currentValue}`);
	return previousValue;
});

console.log(bigger);