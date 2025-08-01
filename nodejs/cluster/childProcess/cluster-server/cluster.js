const cluster = require("cluster");
const os = require("os");
const numberOfUsersInDB = require("./db");

if (cluster.isMaster) {
  //const cpus = os.cpus().length;
  const cpus = 2;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  const updateWorkers = () => {
    const usersCount = numberOfUsersInDB();
    Object.values(cluster.workers).forEach(worker => {
      worker.send({ usersCount });
    });
  };

  updateWorkers();
  setInterval(updateWorkers, 10000);
} else {
  require("./server");
}
