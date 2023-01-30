let rawArray = [[1, 2, 3], [4, 4, 5]];
let newarray = [];

for (const i of rawArray) {
    for (const iterator of i) {
        newarray.push(iterator);
    }
    
}
document.getElementById("array").innerHTML = `${newarray}`