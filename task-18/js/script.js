let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
    continue;
   console.log("bomb triggered");

  }else{
    console.log("bomb disarmed");
  }
}

// output: 99 bomb disarmed