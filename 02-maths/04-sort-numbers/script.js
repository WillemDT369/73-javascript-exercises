/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        
        const numbers = document.getElementById("numbers").value;   // gets value from element with id "numbers"
        const numberSeries = numbers.split(",");   // Splits string into array
                                                   // Space between (", ") = what's left out after split
                                                   // (", ") output = 2,4,10,14,16,23,90
                                                   // (",")  output = 2, 4, 10, 14, 16, 23, 90
        
        
        numberSeries.sort(function(a, b){
            return a - b                           // return b - a = descending 
        });
        
        document.getElementById("numbers").value = numberSeries;

        console.log(numberSeries);


    });

})();
