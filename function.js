// function jumlahVolumeDuaKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));

function tambah() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += Number(prompt("masukkan nilai yang ingin ditambah :"));
  }
  return hasil;
}

var hasil = tambah(1, 2, 3, 4, 5);
alert(" hasilnya adalah " + hasil);
