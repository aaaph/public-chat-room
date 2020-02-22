import { createServer } from "http";
import { app } from "./app";
import { config } from "dotenv";
config();
import { connect } from "./database";

const port = process.env.PORT || 3000;

const server = createServer(app.callback());

server.on("listening", () => {
   console.log(`server listening on port: ${port}, pid: ${process.pid} `);
});
server.on("error", err => {
   console.log("http server error event...");
   console.log(err);
});

// add database connection...
connect()
   .then(() => {
      server.listen(port);
   })
   .catch(err => {
      server.emit("error", err);
   });
