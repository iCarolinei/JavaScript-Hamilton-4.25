/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    const fruits = [
      "cerise",
      "durian",
      "pomme",
      "poire",
      "fraise",
      "tomate",
      "orange",
      "mandarine",
      "fraise",
      "durian",
      "pêche",
      "cerise",
      "raisin",
      "cerise",
    ];
  
    // my solution 5-11
    document.getElementById("run").addEventListener("click", function () {
      let dedupe = [...new Set(fruits)];
      console.log(dedupe);
    });
  })();
  
  /*  other way 
  document.getElementById("run").addEventListener("click", function () {
      let dedupe = fruits.filter((item, index) => fruits.indexOf(item) === index);
      console.log(dedupe);
    });
  
   */
