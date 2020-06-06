function addCero() {
    const numFac = document.getElementById('addcero').value;
    console.log(addCero1(numFac));
}
function addCero1(i) {
    if (i < 10) {
        i = '000000' + i;
    }
    if (i >= 10 && i < 20) {
        i = '00000' + i;
    }
    if (i >= 20 && i < 30) {
        i = '0000' + i;
    }
    if (i >= 30 && i < 40) {
        i = '000' + i;
    }
    if (i >= 40 && i < 50) {
        i = '00' + i;
    }
    if (i >= 50 && i < 60) {
        i = '0' + i;
    }
    return i;
}