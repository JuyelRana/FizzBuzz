function fizzBuzz(num){
  for(let i = 1; i <= num; i++){
    if(!(i % 3) && !(i % 5)){
      console.log('FizzBuzz');
    }else if(!(i%3)){
      console.log('Fizz');
    }else if(!(i%5)){
      console.log('Buzz');
    }else{
      console.log(i);
    }
  }
}


fizzBuzz(100);