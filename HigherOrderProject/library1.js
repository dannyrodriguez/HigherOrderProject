//Q1 ReverseString
function () {
    var x = "Everyone loves coding functions!";
    return x; 
}
!function firstReverse(stringFunc) {
    var result;
    var reverse;
    if (typeof stringFunc === "function") {
        result = stringFunc();
        reverse = result.split("").reverse().join("");
    }
    
    document.getElementById("output").innerHTML = reverse;
}
firstReverse(function () {
    var x = "Everyone loves coding functions!";
    return x; 
});

//Q2 Factorial
function number() {
    var x = 5;
    return x;
}
function factorial(num) {
    var result = 1;
    for (var i = num(); i > 1; i--) {
        result *= i;
    }
    
    document.getElementById("output").innerHTML = result;
}
factorial(number);

//Q3 LongestWord
function longestWord(sen) {
    var sen = "Everyones1 Everyones2 blah"
    return sen;

}

function longest(sen) {
    var sent = sen();
    var wordArray = sent.split(" ");
    var result = wordArray[0];
    var container = wordArray[0].length;
    for (i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > container) {
            result = wordArray[i];
            container = wordArray[i].length;
        }
    }
    document.getElementById("output").innerHTML = result;

}
longest(longestWord);

// SimpleAdding Q5
function number() {
    var x = 5;
    return x;
}
function adding(num) {
    var result = 1;
    for (var i = num() ; i > 1; i--) {
        result += i;
    }

    document.getElementById("output").innerHTML = result;
}
adding(number);

//Q4 LetterChanges
function letter() {
    var str = "friend"
    return str;

}

function LetterChanges(str) {
    var abc = str();
    var letter;
    var trans;
    var results = "";
    for (var i = 0; i < abc.length; i++) {
        letter = abc.substring(i, i+1);
        trans = String.fromCharCode(letter.charCodeAt(0) + 1);  
        if (trans === "a" ||trans === "e" ||trans === "i" ||trans === "o" ||trans === "u") {
            trans = trans.toUpperCase(); 
        }
        results = results + trans;
    }
   
    document.getElementById("output").innerHTML = results;
}

LetterChanges(letter);


