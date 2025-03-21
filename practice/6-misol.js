var number1 = Number(prompt("1 - Sonni kiriting!"))
var number2 = Number(prompt("2 - Sonni kiriting!"))

function function6(params1, params2) {
    if (Boolean(params1) && Boolean(params2)){
    
        alert("Natijani consoldan topasiz")
        s = 0;
        if (params1 > params2) {
            for (var i = params2; i <= params1; i++) {
                if (i % 2 == 1) {
                    s += i;
                }
            }    
        } else
            for (var i = params1; i <= params2; i++) {
                if (i % 2 == 1) {
                    s += i;
                }
            }
        return s;
        
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function6(number1, number2)

console.log(`Result: ${result}`)