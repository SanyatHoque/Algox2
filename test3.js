function makeInputVerifier(minimum, maximum, x) {

        if (x<minimum) {
            return console.log("Input is less than minimum value")
          } else if (x>maximum) {
            return console.log("Input is more than maximum value")
          }
        if (x>minimum && x<maximum) {return console.log("Input is in range")}

  }

  makeInputVerifier(5,10,7)