/**
 * Function to refine the alert equipment value
 * @param {int} int number to convert
 * @returns {boolean} boolean true/false or throw an error
 */
function IntToBool(int) {

    if (int === 1) return true
    if (int === 0) return false

    // Need to change : throwing error expected
    else return "error" 
}

export default IntToBool