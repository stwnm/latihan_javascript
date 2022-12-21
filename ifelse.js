var jumlahmobil = 10;
var mobilbagus = 6;

for (var mobil = 1; mobil <= jumlahmobil; mobil++) {
  if (mobil <= mobilbagus && mobil !== 5) {
    console.log(" Mobil No " + mobil + " Beropserasi dengan baik ");
  } else if (mobil === 8 || mobil === 10 || mobil === 5) {
    console.log(" Mobil No " + mobil + " Sedang Lembur ");
  } else {
    console.log(" Mobil No " + mobil + " TIdak Beroperasi ");
  }
}
