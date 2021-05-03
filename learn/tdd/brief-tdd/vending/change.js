const coins = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange(playable, paid) {
    var change = [];
    var diff = paid - playable;

    // while (diff !== 0) {
    coins.forEach(function (e) {
        while (diff - e >= 0) {
            diff -= e;
            change.push(e);
        }
    });
    // }

    return change;
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = getChange; // allows CommonJS/Node.js require()
}
