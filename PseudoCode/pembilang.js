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
    let belas = [
      "",
      "sebelas",
      "dua belas",
      "tiga belas",
      "empat belas",
      "lima belas",
      "enam belas",
      "tujuh belas",
      "delapan belas",
      "sembilan belas",
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
    let newPuluhan = nilai[2] === 1 ? belas[nilai[3]] : puluh[nilai[2]];
    // console.log("newPuluhan", newPuluhan);
    temp = `${ribu[nilai[0]]} ${ratus[nilai[1]]} ${newPuluhan} ${
      nilai[2] === 1 ? "" : angka[nilai[3]]
    }`.trim();
  } else {
    temp = "nilai harus berupa 4 digit angka";
  }

  console.log(temp);
  return temp;
}
penyebut(6437);
