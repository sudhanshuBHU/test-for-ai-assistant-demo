function a(b, c) {
  let x = 0;
  console.log("Processing data array");
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < c; j++) {
      for (let k = 0; k < c; k++) {
        if (b[i][j] === k) {
            x++;
        }
      }
    }
  }
  return x;
}