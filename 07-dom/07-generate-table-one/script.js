/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    // selecting the output
    let target = document.querySelector("#target");
    // creating new elements
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    // put tableBody inside the table
    table.appendChild(tableBody);

    // creating elements 10 times (to put inside the tabelBody)
    for (i = 0; i < 10; i++) {
        // creating new elements
        let rows = document.createElement("tr");
        let data = document.createElement("td");
        // add content to td element
        data.innerHTML = "should there be something inside here";
        // put the td inside tr (data inside rows)
        rows.appendChild(data);
        // put the tr (rows with td inside) inside the tableBody
        tableBody.appendChild(rows);
    }
    // put the whole table inside the target (div)
    target.appendChild(table);
    

})();