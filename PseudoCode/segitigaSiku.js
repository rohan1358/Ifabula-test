let jumlahSegitiga = 5;
for (let x = 0; x < jumlahSegitiga; x++) {
  let newX = x + 1;
  console.log(newX);

  for (let y = 0; y < newX; y++) {
    let newY = y + 1;
    console.log("*".repeat(newY));
  }
}
