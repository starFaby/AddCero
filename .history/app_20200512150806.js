function addCero(){
    const numFac = document.getElementById('addcero').value;
    console.log(addCero(numFact));
}


function addC(numFact) {
    if (numFac < 10) {
         numFac = '0' + numFac;
    }
    return numFact;
}