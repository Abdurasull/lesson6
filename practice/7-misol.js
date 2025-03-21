var number1 = Number(prompt("1 - Sonni kiriting!"))
var number2 = Number(prompt("2 - Sonni kiriting!"))

function function7(params1, params2) {
    if (Boolean(params1) && Boolean(params2)){
    
        alert("Natijani consoldan topasiz")
        s = 0;
        Ekuk = params1 > params2 ? params1 : params2;
        while (true) {
            if (Ekuk % params1 == 0 && Ekuk % params2 == 0) {
                return Ekuk;
            } else Ekuk++;
        }   
        
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function7(number1, number2)

console.log(`Result: ${result}`)