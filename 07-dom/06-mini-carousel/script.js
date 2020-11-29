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
    let firstImg = 0;
    const lastImage = gallery.length - 1;

    document.querySelector("#next").addEventListener("click", function () {


        if (firstImg === lastImage) {
            firstImg = 0;
        } else {
            firstImg++;
        }

        image.src = gallery[firstImg];
    });

    // let firstImg = document.getElementsByTagName("img")[0];
    // let nextImg = 0;

    // document.getElementById("next").onclick = () => {
    //     if (nextImg === 4) {
    //         nextImg = 0;
    //     } else {
    //         ++nextImg;
    //     }
    //     firstImg.src = gallery[nextImg];
    // };


    // your code here

})();