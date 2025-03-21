var number1 = Number(prompt("Sonni kiriting!"))
 function function1(params1) {
    
    if(Boolean(params1)){
        return "Natijani consoldan topasiz";
        s = 0
        length1 = String(params1).length;
        for (var i = 0; i < length1; i++) {
            s += params1 % 10
            params1 = (params1 /10) | 0;
        }

        return `Result: ${s}`;
        
    }else return "Number turiga tigishli son kiriting!";
    
}

result = function1(number1);

console.log(result)