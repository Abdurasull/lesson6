var number1 = Number(prompt("1-Sonni kiriting!"))
var number2 = Number(prompt("2-Sonni kiriting!"))

function function8(params1, params2) {
    if (Boolean(params1)){
        
        alert("Natijani consoldan topasiz")
        arr1 = []
        if(params1 > params2){
            for (var i = params2; i < params1; i++) {
                j = 0;
                for (var k = 1; k <= Math.sqrt(i); k++) {
                    if (i % k == 0) {
                        j++;
                    }
                }

                if (j == 1)  arr1.push(i);
            }
        }else{
            for (var i = params1; i < params2; i++) {
                j = 0;
                for (var k = 1; k <= Math.sqrt(i); k++) {
                    if (i % k == 0) {
                        j++;
                    }
                }

                if (j == 1)  arr1.push(i);
                
            }
        }
        
        return arr1;
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function8(number1, number2)

console.log(`Result: ${result}`)