const express = require("express");
const colors = require("colors");
const next = require("next");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    connectDB();

    const server = express();
    const routes = require("./routes/getRoutes.js");

    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));

    server.use("/api", routes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(errorHandler);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
