function addCero() {
    const numFac = document.getElementById('addcero').value;
    if (numFac < 10) {
        numFac = '0' + numFac;
    }
}