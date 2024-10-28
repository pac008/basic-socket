class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents()
  }

  socketEvents() {
    this.io.on("connection", (socket) => {

      socket.on("msg-to-server", (newThank) => {
        socket.broadcast.emit("msg-from-server", newThank);
      });
    });
  }
}

module.exports = Sockets;
