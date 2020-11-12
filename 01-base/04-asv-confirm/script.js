/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function generalinfo() {
    var age = prompt("How old are you?");
    var gender = prompt("What is your gender?");
    var location = prompt("Where do you live?");
    var info = confirm(age + " " + gender + " " + location);
        if (info == true){
            alert("nice, you did it!")
            // return true
        }
        else{
            generalinfo()
        }
})();


//trying this one to work, later

// (function generalinfo() {
//     var age = prompt("How old are you?");
//     var result = confirm("C'mon bruh gonna tell me?");
//         while (result == false){
//             result = confirm("C'mon bruh how old are you?");
//         }
//         if (result == true){
//             age = prompt("Thanks for changing your mind.")
//         }
//     var gender = prompt("What is your gender?");
//         if (gender == false){
//             prompt("What is your gender?");
//         }
//     var location = prompt("Where do you live?");
//         if (location == false){
//             prompt("Where do you live?");
//         }
//     var info = confirm(age + " " + gender + " " + location);
//         if (info == true){
//             alert("nice, you did it!")
//             // return true
//         }
//         else{
//             generalinfo()
//         }
// })();