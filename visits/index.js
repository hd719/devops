const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server", // this is pointing to the service that is being used in our docker-compose file
  port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0); // 0: refers to the exit status code (we exited b/c we wanted to) (1, 2, 3) -> We exited bc something went wrong
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
