var number1 = Number(prompt("Sonni kiriting!"))

function function4(params1) {
    if (Boolean(params1)){
    
        alert("Natijani consoldan topasiz")

        j = 0;
        for (var i = 1; i <= params1 / 2; i++) {
            if (params1 / i == i) {
                j++;
            }
        }

        if (j == 1)   return "Bu sonning ildizi butun"
            else return "Bu sonning ildizi butun emas"
        
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function4(number1)

console.log(result)