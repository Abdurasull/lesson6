var number1 = Number(prompt("Sonni kiriting!"))

function function8(params1) {
    if (Boolean(params1)){
        
        alert("Natijani consoldan topasiz")
        s = 0;
        for (var i = 1; i < params1; i++) {
            if(params1 % i == 0)
                s += i;             
        }
        if(s == params1) return true;
        else return false;       
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function8(number1)

console.log(`Result: ${result}`)