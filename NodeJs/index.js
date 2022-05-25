const express = require("express");
const app = express();
const port = 1212;

// 10. Buatlah project nodejs menggunakan express.
app.get("/", (req, res) => {
  // 11. Tambahkan header pada saat request ke API di soal no 10
  const { headers } = req;
  const headerValid = { "user-id": "ifabula", scope: "user" };
  if (
    headers["user-id"] === headerValid["user-id"] &&
    headers["scope"] === headerValid.scope
  ) {
    res.send("Success Get");
  } else {
    res.statusCode = 401;
    res.json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }
});

// 10. Buatlah project nodejs menggunakan express.
app.post("/", (req, res) => {
  // 11. Tambahkan header pada saat request ke API di soal no 10
  const { headers } = req;
  const headerValid = { "user-id": "ifabula", scope: "user" };
  if (
    headers["user-id"] === headerValid["user-id"] &&
    headers["scope"] === headerValid.scope
  ) {
    res.send("Success Authorized!");
  } else {
    res.statusCode = 401;
    res.json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }
});

app.listen(port, () => {
  console.log(`listening with port ${port}`);
});
