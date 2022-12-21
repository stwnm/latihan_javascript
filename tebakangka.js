// panduan game
alert("Tebak Angka dari 1 - 10 \n Kamu Punya 3 Kesempatan");

// tebakan user

var user = prompt(" Masukka Angka Tebakan ");

// bilangan bulat random
var angkaYangHarusDitebak = Math.floor(Math.random() * 10 + 1);
// ruless
var hasil = "";
for (var i = 3; i >= 1; i--) {
  if (user == angkaYangHarusDitebak) {
    hasil = " BENAR ";
    break;
  } else if (user > angkaYangHarusDitebak) {
    hasil = "LEBIH KECIL";
  } else if (user < angkaYangHarusDitebak) {
    hasil = "LEBIH BESAR";
  } else {
    hasil = " ANDA SALAH MEMASUKKAN ANGKA ";
  }
  alert(" JAWABAN " + hasil);

  for (var kesempatan = 1; kesempatan >= 1; kesempatan--) {
    user = Number(prompt(" Kamu Punya " + i + "Kesempatan Lagi"));
  }
}
//hasil tebakan
alert("Kamu Memilih : " + user + "\n Angka Yang Harus Ditebak : " + angkaYangHarusDitebak + "\n maka Hasilnya : " + hasil);
