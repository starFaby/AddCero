const numFac = document.getElementById('addcero').value;

console.log(addCero(numFact));

function addCero(numFact) {
    if (numFac < 10) {
        return numFac = '0' + numFac;
    }
    console.log();
}