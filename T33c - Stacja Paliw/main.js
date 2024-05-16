const rodz = document.querySelector('#rodzaj');
const il = document.querySelector('#ile');
const wyn = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let rodzaj = rodz.value;
    console.log(rodzaj);
    let ile = il.value;
    console.log(ile);
    let koszt = 0;
    if(rodzaj == 1) {
        koszt = ile * 4;
    }
    else {
        if(rodzaj == 2) {
            koszt = ile * 3.5;
        }
        else {
            koszt = 0;
        }
    }
    wyn.innerHTML = 'koszt paliwa: ' + koszt + 'zł';
})
