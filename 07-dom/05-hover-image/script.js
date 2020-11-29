/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    // must be const for not changing the original src attribute
    const image = document.querySelector("img");
    const source = image.src;
    const hoverData = image.dataset.hover;

    // console.log(hoverData);

    image.onmouseover = function () {
        image.src = hoverData;
    };

    image.onmouseout = function () {
        image.src = source;
    }







})();