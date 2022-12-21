var baju = prompt("masukkan ukuran baju anda : \n (contoh : S M XL XXL dst)");

switch (baju) {
  case "S" && "s":
  case "M" && "m":
    alert("Ukuran Baju anda kecil");
    break;
  case "XL" && "xl":
    alert("Ukuran Baju anda besar");
    break;
  case "XXL" && "xxl":
    alert("Ukuran Baju anda sangat besar");
    break;
  default:
    alert("Anda salah memasukkan ukuran baju");
    break;
}
