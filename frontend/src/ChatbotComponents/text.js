const fs = requires("fs");

fs.readfile("chat1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
