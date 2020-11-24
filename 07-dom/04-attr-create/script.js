/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function newImage(){
        // getting the old element (source)
        let picture = document.getElementById("source");
        // getting the "#target" element
        let targetElement = document.getElementById("target");
        // creating image tag
        let newElement = document.createElement("img");
        newElement.src = picture.getAttribute("data-image");
        newElement.id = "myKitty";
        // adding new kitty
        targetElement.appendChild(newElement);
        // remove original kitty
        picture.remove();
        // maybe add some styling


    
    }
    newImage();
})();
