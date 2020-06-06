function addCero(){
    const numFac = document.getElementById('addcero').value;
    console.log(addCero1(numFac));
}
function addCero1(i) {
    if (i < 10) {
        i = '0' + i;
    }else if(i < 20){

    }
    return i;
}