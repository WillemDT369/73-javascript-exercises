/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    const image = document.querySelector("img");
    // has to be outside the function
    let firstImg = 0;
    const lastImage = gallery.length - 1;

    document.querySelector("#next").addEventListener("click", function () {


        if (firstImg === lastImage) {
            firstImg = 0;
        } else {
            firstImg++;
        }
        // should be here, not above "if" otherwise it shows the first img first and then starts counting
        image.src = gallery[firstImg];
    });


})();