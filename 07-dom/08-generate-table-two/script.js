/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let output = document.querySelector("#target");
    // create elements
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    // put body inside table
    table.appendChild(tableBody);

    // create 10 rows with each 10 td's (columns) inside
    for (i = 0; i < 10; i++) {
        let rows = document.createElement("tr");
        for (q = 0; q < 10; q++) {
            let data = document.createElement("td");
            data.innerHTML = (i + 1) + "x" + (q + 1) + "=" + (i + 1) * (q + 1);
                
            // put data inside rows
            rows.appendChild(data);
            // put rows inside the tableBody
            tableBody.appendChild(rows);
        }
    }
    // put the whole table inside the output
    output.appendChild(table);
    
    console.log(output.appendChild(table));


})();