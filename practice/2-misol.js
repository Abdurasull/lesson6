var number1 = Number(prompt("Sonni kiriting!"))

function function2(params2) {
    if (Boolean(params2)){
    
        alert("Natijani consoldan topasiz")

        numberString = String(params2)
        result = "";
        for (var i = numberString.length - 1; i >= 0; i--) {
            result += numberString[i]
        }

        console.log(`Result: ${result}`)
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function2(number1);
console.log(result);