/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",function(){

    // create object willem with empty values
    let objWillem = {
        lastname: "",
        firstname: "", 
        age: "",
        city: "", 
        country: "", 
    }
    
    objWillem.lastname = prompt("what's your last name?");
    objWillem.firstname = prompt("what's your first name?");
    objWillem.age = prompt("how old are you?");
    objWillem.city = prompt("what city are you from?");
    objWillem.country = prompt("which country do you live in?");
    
    console.log(objWillem);
});

})();
