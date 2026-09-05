/* =========================================================
   BITS OF EMBEDDED
   Main JavaScript
   ========================================================= */


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PAGE LOADED
   ========================================================= */

console.log(
    "Bits of Embedded loaded successfully."
);