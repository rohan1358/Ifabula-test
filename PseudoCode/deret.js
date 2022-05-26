let deret = 100;
for (let index = 0; index < deret; index++) {
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
