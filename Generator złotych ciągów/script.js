document.getElementById('generuj_ciag').addEventListener('click', generuj);

//odd//
let nieparzyste = document.getElementsByName('np');
for(let i = 0; i < 3; i++) {
    nieparzyste[i].addEventListener('click', color_odd);
}

//even//
let parzyste = document.querySelectorAll('.parzyste');
parzyste.forEach(przycisk => {
    let kolor = przycisk.value;
    przycisk.addEventListener('click', function(){
        color_even(kolor);
    });
});

//phi//
let phi = document.getElementsByClassName('phi');
for(let ratio of phi) {
    let kolor = ratio.value;

    ratio.addEventListener('click', () => {
        color_phi(kolor);
    })
}

//all//
let wszystkie = document.querySelectorAll('.wszystkie');
wszystkie.forEach(przycisk => {
    przycisk.addEventListener('click', color_all);
});

//zablokuj internety
document.querySelector('#blokada').addEventListener('click', access);

function generuj() {
    let ile = document.getElementById('ile').value;
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let bufor;
    
    a = parseFloat(a);
    b = parseFloat(b);
    ile = parseInt(ile);

    if(isNaN(a) || isNaN(b) || isNaN(ile) || ile < 2) {
        document.querySelector('#ciag').innerHTML = '<p>Podaj poprawne liczby!</p>';
        document.querySelector('#fi').innerHTML = '';
    }

    else {
        let ciag = '<p>n<sub>x</sub></p>';
        let ratios = '<p>&Phi; = n<sub>x</sub> &divide; n<sub>x-1</sub></p>';

        if(a % 2 == 1) ciag += '<div>01 -> <span class="odd">' + a + '</span></div>';
        else ciag += '<div>01 -> <span class="even">' + a + '</span></div>';
        
        if(b % 2 == 1) ciag += '<div>02 -> <span class="odd">' + b + '</span></div>';
        else ciag += '<div>02 -> <span class="even">' + b + '</span></div>';

        ratios += '<div>01 -> <span class="ratio">brak</span></div>';
        ratios += '<div>02 -> <span class="ratio">' + (b/a).toFixed(30) + '</span></div>';

        for(i = 3; i <= ile; i++) {
            bufor = a;
            a = b;
            b = bufor + b;

            if(i<10) bufor = '0';
            else bufor = '';

            if(b % 2 == 1) ciag += '<div>' + bufor + i + ' -> <span class="odd">' + b + '</span></div>';
            else ciag += '<div>' + bufor + i + ' -> <span class="even">' + b + '</span></div>';

            ratios += '<div>' + bufor + i + ' -> <span class="ratio">' + (b/a).toFixed(30) + '</span></div>';
        }

        document.querySelector('#ciag').innerHTML = ciag;
        document.querySelector('#fi').innerHTML = ratios;
    }
}

function color_odd() {
    let kolor = this.value;
    
    let wyrazy_nieparzyste = document.getElementsByClassName('odd');

    for(let wyraz of wyrazy_nieparzyste) {
        wyraz.style.color = kolor;
    }
}

function color_even(kol) {
    let wyrazy_parzyste = document.querySelectorAll('.even');

    for(let wyraz of wyrazy_parzyste) {
        wyraz.style.cssText = 'color: ' + kol + ';';
    }
}

function color_phi(k) {
    let stosunki = document.querySelectorAll('#fi span');

    for(ratio of stosunki) {

        //puste i tłuste
        //ratio.style.cssText = '';

        //kasuj to z internetów
        ratio.removeAttribute('style');

        if(k == 'red') {
            ratio.classList.add('krew_i_wino');
            ratio.classList.remove('trawa_i_ufo');
            ratio.classList.remove('pezet');
        }

        else if(k == 'green') {
            ratio.classList.remove('krew_i_wino');
            ratio.classList.add('trawa_i_ufo');
            ratio.classList.remove('pezet');
        }

        else{
            ratio.classList.remove('krew_i_wino');
            ratio.classList.remove('trawa_i_ufo');
            ratio.classList.add('pezet');
        }
    }
}

function color_all() {
    let kolor = this.value;

    let wszystkie_liczby = document.getElementsByTagName('span');

    for(let liczba of wszystkie_liczby) {
        liczba.style.cssText = 'color: ' + kolor + ';';
    }
}

function access() {
    let inputs = document.querySelectorAll('input:not(#blokada)');

    for(let input of inputs) {
        input.toggleAttribute('disabled');
    }

    if(this.value == "Zablokuj") this.value = 'Odblokuj';
    else this.value = 'Zablokuj';
}