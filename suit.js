var ulangi = true;

while (ulangi) {
  // pilihan player
  var player = prompt("pilih salah satu \n pilihan : semut , gajah , orang ");

  //pilihan komputer
  //membangkitkan bilangan random
  var komputer = Math.random();
  if (komputer < 0.34) {
    komputer = "gajah";
  } else if (komputer >= 0.34 && komputer <= 0.65) {
    komputer = "semut";
  } else {
    komputer = "orang";
  }

  //rules
  var hasil = "";
  if (player == komputer) {
    hasil = "SERI !";
  } else if (player == "gajah") {
    if (komputer == "orang") {
      hasil = "KAMU MENANG !";
    } else {
      hasil = "KAMU KALAH !";
    }
  } else if (player == "orang") {
    if (komputer == "semut") {
      hasil = "KAMU MENANG !";
    } else {
      hasil = "KAMU KALAH !";
    }
  } else if (player == "semut") {
    if (komputer == "orang") {
      hasil = " KAMU KALAH !";
    } else {
      hasil = "KAMU MENANG !";
    }
  } else {
    hasil = "KAMU MEMASUKKAN KEYWORD YANG SALAH !";
  }

  //tampilan hasil
  alert(" Kamu Memilih " + player + "  dan Komputer memilih " + komputer + "\n Maka Hasilnya " + hasil);
  ulangi = confirm("Coba Lagi ?");
}
alert("Terimakasih Sudah Bermain");
