// Enter key event listener
document.getElementById("reverseStringInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("reverseStringBtn").click();
    }
});

document.getElementById("checkPalindromeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("checkPalindromeBtn").click();
    }
});

document.getElementById("subTotalInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("totalBillBtn").click();
    }
});

document.getElementById("tipInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("totalBillBtn").click();
    }
});

// Reverse String Functions
function reverseString(str) {
    const len = str.length;
    let newString = "";

    for (let i=len-1; i>=0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseStringDisplay() {
    let input = document.getElementById("reverseStringInput").value;
    let result = reverseString(input);
    document.getElementById("reverseStringOutput").innerHTML = "Reversed string is: " + result;
}

// Check Palindrome Function
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

function checkPalindromeOutput() {
    let input = document.getElementById("checkPalindromeInput").value;
    let result = checkPalindrome(input);
    document.getElementById("checkPalindromeOutput").innerHTML = result;
}

// Calculate Total Bill Functions
function totalBill(subtotal, tip) {
    subtotal = parseInt(subtotal);
    tip = parseFloat(tip);
    return (subtotal +(subtotal*tip/100));
}

function calcSubTotalBill() {
    let subtotal = document.forms["bill"]["subTotalInput"].value;
    let tip = document.forms["bill"]["tipInput"].value;
    let result = totalBill(subtotal, tip);
    document.getElementById("subTotalOutput").innerHTML = "Total bill including the tip is: " + result;
}
