function validateSyntax() {
    let input = document.getElementById("petInput").value;
    let result = ""; 

    let myRegex = /^pet_[A-Za-z0-9]+$/; 

    if (myRegex.test(input)) {
        result = 'Valid Syntax <span class="valid"></span>';
    } else {
        result = 'Invalid Syntax <span class="invalid"></span>';
    }

    
    document.getElementById("result").innerHTML = result;
    
}
