function arrayTotal(arr){
    return arr.reduce((accumulator, current_Value) => accumulator + current_Value, 0);
}
module.exports = { arrayTotal };