function panggilRegexp(x, y, z, u) {
    var x = "Belajar html";
    hasil = /Belajar html/.test(x)
    if (hasil == true) {
        console.log("Belajar html");
    } else {
        console.log('gagal');
    }
    var y = "Belajar javascript";
    hasil2 = /Belajar javascript/.test(y)
    if (hasil == true) {
        console.log("Belajar");
    } else {
        console.log('gagal');
    }
    var z = "Belajar css";
    hasil3 = /Belajar css/.test(z)
    if (hasil3 == true) {
        console.log("Belajar css");
    } else {
        console.log('gagal');
    }
    var u = "Belajar php";
    hasil4 = /Belajar php/.test(u)
    if (hasil4 == true) {
        console.log("Belajar");
    } else {
        console.log('gagal');
    }
}
panggilRegexp()