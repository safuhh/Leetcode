/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let parts = address.split(".");
    let newstring =parts.join(["[.]"]);
    return newstring
};