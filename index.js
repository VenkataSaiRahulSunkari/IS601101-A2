function reverseString(str) {
    const len = str.length;
    let newString = "";

    for (let i=len-1; i>=0; i--) {
        newString += str[i];
    }
    return newString;
}

function checkPalindrome(input) {
    const inp = input.toString();
    len = inp.length;
    
    isPalindrome = true;
    for (let i=0; i<len/2; i++) {
        if (inp[i] !== inp[len - 1 - i]) {
            isPalindrome = false;
        }
    }
    if (!isPalindrome) {
        return "This number is not a palindrome.";
    }
    else {
        return "This number is a palindrome.";
    }
}

function totalBill(subtotal, tip) {
    subtotal = parseInt(subtotal);
    tip = parseFloat(tip);
    return (subtotal +(subtotal*tip/100));
}

function reverseStringDisplay() {
    let input = document.getElementById("reverseStringInput").value;
    let result = reverseString(input);
    document.getElementById("reverseStringOutput").innerHTML = result;
}

function checkPalindromeOutput() {
    let input = document.getElementById("checkPalindromeInput").value;
    let result = checkPalindrome(input);
    document.getElementById("checkPalindromeOutput").innerHTML = result;
}

function calcSubTotalBill() {
    let subtotal = document.forms["bill"]["subTotalInput"].value;
    let tip = document.forms["bill"]["tipInput"].value;
    let result = totalBill(subtotal, tip);
    document.getElementById("subTotalOutput").innerHTML = "Total bill including the tip is:" + result;
}
