function addCero(){
    const numFac = document.getElementById('addcero').value;
    console.log(addCero1(numFact));
}
function addCero1(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}