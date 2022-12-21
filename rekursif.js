function hitungMundur(n) {
  // base case
  if (n === 0) return;
  //
  console.log(n);
  return hitungMundur(n - 1);
}

hitungMundur(10);
