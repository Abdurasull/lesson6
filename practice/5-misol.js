var number1 = Number(prompt("1 - Sonni kiriting!"))
var number2 = Number(prompt("2 - Sonni kiriting!"))

function function5(params1, params2) {
    if (Boolean(params1) && Boolean(params2)){
    
        alert("Natijani consoldan topasiz")

        j = 0;
        for (var i = 1; i <= params2; i++) {
            params1 += 2
        }

        return params1;
        
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function5(number1, number2)

console.log(`Result: ${result}`)