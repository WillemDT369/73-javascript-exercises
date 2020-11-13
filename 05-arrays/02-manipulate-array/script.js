/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        // deleting first element
        fruits.splice(0, 1);
        // deleting last element
        fruits.splice(-1, 1);
        // add banana at beginning
        fruits.splice(0, 0, "banana");
        // add kiwi at end
        fruits.splice(-1, 1, "kiwi");
        document.getElementById("result").innerHTML = "<h3>" + fruits + "</h3>";
        

    })

})();
