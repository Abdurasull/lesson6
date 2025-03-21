var number1 = Number(prompt("Sonni kiriting!"))

function function8(params1) {
    if (Boolean(params1)){
        
        alert("Natijani consoldan topasiz")
        strParams = String(params1);
        length1 = strParams.length;
        if(strParams[0] > strParams[length1 - 1]){
            j = 1
            for (var i = 1; i < strParams.length; i++) {                
                if (strParams[i-1] > strParams[i]) {
                    j++;
                } else return `${strParams[i - 1]} dan kiyin ${strParams[i] } kelgan`
            }
            return "Barcha raqamlar kamayib boryabdi";
        } else{
            j = 1
            for (var i = 1; i < strParams.length; i++) {                
                if (strParams[i-1] < strParams[i]) {
                    j++;
                } else return `${strParams[i - 1]} dan kiyin ${strParams[i] } kelgan`
            }
            return "Barcha raqamlar o`sib boryabdi";
        }
    }else{
        return "Number turiga tigishli son kiriting!";
    }
}

result = function8(number1)

console.log(`Result: ${result}`)