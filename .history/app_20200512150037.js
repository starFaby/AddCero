function addCero() {
    const numFac = document.getElementById('addcero').value;
    if (numFac < 10) {
        return numFac = '0' + numFac;
    }
}