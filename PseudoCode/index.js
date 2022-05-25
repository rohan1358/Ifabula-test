// menampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100

// deret start
console.log("deret ===============");
for (let index = 0; index < 100; index++) {
  let newIndex = index + 1;
  let kelipatan5 = newIndex % 5;
  if (newIndex > 80) {
    if (!kelipatan5) {
      console.log(newIndex, ":", "LUAR BIASA");
    }
  } else if (newIndex > 70 && newIndex <= 80) {
    if (!kelipatan5) {
      console.log(newIndex, ":", "BAIK");
    }
  } else if (newIndex > 60 && newIndex <= 70) {
    if (!kelipatan5) {
      console.log(newIndex, ":", "CUKUP");
    }
  } else if (newIndex <= 60) {
    if (!kelipatan5) {
      console.log(newIndex, ":", "KURANG");
    }
  }
}
// deret end
console.log("deret ===============");

//  Membuat deret bilangan Fibonacci sebanyak 20
console.log("fibonacci ===============");
// fibonacci start
var i;
var fib = [0, 1]; // Initialize array!
for (i = 2; i <= 20; i++) {
  fib.push(fib[i - 2] + fib[i - 1]);
}

console.log(fib.join(" "));
// fibonacci end
console.log("fibonacci =============== ");

// membuat segitiga siku"
for (let x = 0; x < 5; x++) {
  let newX = x + 1;
  console.log(newX);

  for (let y = 0; y < newX; y++) {
    let newY = y + 1;
    console.log("*".repeat(newY));
  }
}

// pembilang
console.log("pemilang start =============== ");
function penyebut(value) {
  let nilai = Math.abs(value).toString().split("");
  let temp = "";

  if (nilai.length === 4) {
    let ribu = [
      "",
      "seribu",
      "dua ribu",
      "tiga ribu",
      "empat ribu",
      "lima ribu",
      "enam ribu",
      "tujuh ribu",
      "delapan ribu",
      "sembilan ribu",
    ];
    let ratus = [
      "",
      "seratus",
      "dua ratus",
      "tiga ratus",
      "empat ratus",
      "lima ratus",
      "enam ratus",
      "tujuh ratus",
      "delapan ratus",
      "sembilan ratus",
    ];
    let puluh = [
      "",
      "sepuluh",
      "dua puluh",
      "tiga puluh",
      "empat puluh",
      "lima puluh",
      "enam puluh",
      "tujuh puluh",
      "delapan puluh",
      "sembilan puluh",
    ];
    let angka = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "delapan",
      "sembilan",
    ];

    temp = `${ribu[nilai[0]]} ${ratus[nilai[1]]} ${puluh[nilai[2]]} ${
      angka[nilai[3]]
    }`.trim();
  } else {
    temp = "nilai harus berupa 4 digit angka";
  }

  console.log(temp);
  return temp;
}
penyebut(2345);

console.log("pemilang end =============== ");
