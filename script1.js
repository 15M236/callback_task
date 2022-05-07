function step1(callback) {
    console.log("10");
    //demo1.innerHTML="10"
    setTimeout(function() {
      console.log("9");
      demo1.innerHTML="9"
      callback();
    }
    , 1000);
  }
function step2(callback) {
    setTimeout(function() {
      console.log("8");
      demo1.innerHTML="8"
      callback();
    }
    , 1000);
  }
  function step3(callback) {
    setTimeout(function() {
      demo1.innerHTML="7"
      callback();
    }
    , 1000);
  }
  function step4(callback) {
    setTimeout(function() {
      console.log("6");
      demo1.innerHTML="6"
      callback();
    }
    , 1000);
  }
  function step5(callback) {
    setTimeout(function() {
      console.log("5");
      demo1.innerHTML="5"
      callback();
    }
    , 1000);
  }
  function step6(callback) {
    setTimeout(function() {
      console.log("4");
      demo1.innerHTML="4"
      callback();
    }
    , 1000);
  }
  function step7(callback) {
    setTimeout(function() {
      console.log("3");
      demo1.innerHTML="3"
      callback();
    }
    , 1000);
  }
  function step8(callback) {
    setTimeout(function() {
      console.log("2");
      demo1.innerHTML="2"
      callback();
    }
    , 1000);
  }
  function step9(callback) {
    setTimeout(function() {
      console.log("1");
      demo1.innerHTML="1"
      callback();
    }
    , 1000);
  }
  step1(()=>{
    step2(()=>{
      step3(()=>{
        step4(()=>{
            step5(()=>{
                step6(()=>{
                    step7(()=>{
                        step8(()=>{
                            step9(()=>{
                                setTimeout(function() {
                                    
                                    demo1.innerHTML="Happy Independence Day"
                                  }
                                  , 1000);
                                ;
                            })
                        });
                    });
                });
            });
        });
      });
    });
  });