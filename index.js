import mongoose from "mongoose";
import app from "./app.js";
import config from "./src/config/config.js";

const { PORT, MONGO_URI, RAFI } = config;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`DATABASE Connected:`);

    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(`DATABASE CONNECTION ERROR: ${err}`));
