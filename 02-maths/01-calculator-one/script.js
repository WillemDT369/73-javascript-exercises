/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var x = Number(document.getElementById("op-one").value); 
        var y = Number(document.getElementById("op-two").value);
        // without Number input = string, so 3 + 3 then = 33
        var result = x + y;
        alert(result)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform a substraction
        var x = Number(document.getElementById("op-one").value); 
        var y = Number(document.getElementById("op-two").value);
        // without Number input = string
        var result = x - y;
        alert(result)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform a multiplication
        var x = Number(document.getElementById("op-one").value); 
        var y = Number(document.getElementById("op-two").value);
        // without Number input = string
        var result = x * y;
        alert(result)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform a division
        var x = Number(document.getElementById("op-one").value); 
        var y = Number(document.getElementById("op-two").value);
        // without Number input = string
        var result = x / y;
        alert(result)
    });
})();
