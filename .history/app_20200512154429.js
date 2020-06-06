function addCero() {
    const numFac = document.getElementById('addcero').value;
    for (let i = 0; i < 1000000; i++) {
        console.log(addCero1(i));
    }
}
function addCero1(i) {
    if (i < 10) {
        i = '000000' + i;
    }
    if (i >= 10 && i < 100) {
        i = '00000' + i;
    }
    if (i >= 100 && i < 1000) {
        i = '0000' + i;
    }
    if (i >= 1000 && i < 10000) {
        i = '000' + i;
    }
    if (i >= 10000 && i < 100000) {
        i = '00' + i;
    }
    if (i >= 100000 && i < 1000000) {
        i = '0' + i;
    }
    return i;
}