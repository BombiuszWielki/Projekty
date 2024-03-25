function wypisz() {
    var jeden = document.getElementById("pole1").value;
    var dwa = document.getElementById("pole2").value;
    var napis = "";

    for (n=jeden; n<=dwa; n++) {
        napis = napis + n + " ";
    }

    document.getElementById("wynik").innerHTML = napis;
}