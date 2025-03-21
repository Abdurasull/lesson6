var number1 = Number(prompt("Sonni kiriting!"))

function function3(params1) {
    if (Boolean(params1)){
    
        alert("Natijani consoldan topasiz")

        j = 0;
        for (var i = 1; i <= Math.sqrt(params1); i++) {
            if (params1 % i == 0) {
                j++;
            }
        }

        if (j > 1) return "Tub son emas";
            else return "Tub son";
        
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function3(number1)

console.log(result)