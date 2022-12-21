var kunci = 1;
var jumlahkunci = 30;
var kuncibagus = 15;

while (kunci <= kuncibagus) {
  console.log(" kunci no " + kunci + " bisa dipakai ");
  kunci++;
}

for (kunci = kuncibagus + 1; kunci <= jumlahkunci; kunci++) {
  console.log(" Kunci no " + kunci + " Tidak bisa dipakai ");
}
