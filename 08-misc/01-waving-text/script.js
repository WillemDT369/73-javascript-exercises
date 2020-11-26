/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // change text
    let newText = document.getElementById("target");
    newText.innerHTML = "OMG, OMG, what's going on here";
    
    function increaseTextSize(size) {
        newText.style.fontSize = size + 'px'; 
        if (size <= 40) setTimeout(increaseTextSize, 50, size + 1); 
           
    } 
      increaseTextSize(10);


})();
