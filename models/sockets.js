class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents()
  }

  socketEvents() {
    this.io.on("connection", (socket) => {

      socket.on("newThank", (newThank) => {
        socket.broadcast.emit("newThank", newThank);
      });
    });
  }
}

module.exports = Sockets;
