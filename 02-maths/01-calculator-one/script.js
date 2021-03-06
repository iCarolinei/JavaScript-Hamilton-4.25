/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(){
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let terme1 = parseInt( document.getElementById("op-one").value, 10 );
        let terme2 = +document.getElementById("op-two").value;

        alert(`Result is: ${terme1 + terme2}`);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let terme1 = +document.getElementById("op-one").value;
        let terme2 = +document.getElementById("op-two").value;

        alert(`Result is: ${terme1 - terme2}`);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let terme1 = +document.getElementById("op-one").value;
        let terme2 = +document.getElementById("op-two").value;

        alert(`Result is: ${terme1 * terme2}`);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let terme1 = +document.getElementById("op-one").value;
        let terme2 = +document.getElementById("op-two").value;

        alert(`Result is: ${terme1 / terme2}`);
    });
})();
