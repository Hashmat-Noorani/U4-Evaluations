const app = require("./index");
const connect = require("./configs/db");

app.listen(5500, async () => {
  try {
    await connect();
    console.log("Listening on port 5500");
  } catch (err) {
    console.log(err);
  }
});
