btn.addEventListener("click", function (){
let a = parseInt(input_a.value);
                        let b = parseInt(input_b.value);
                        let c = ((b - a) / a) * 100;
                        input_c.value = c +" %";
                        console.log(c);
          
      }); 