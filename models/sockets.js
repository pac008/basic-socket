class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents()
  }

  socketEvents() {
    this.io.on("connection", (socket) => {

      socket.on("message", (data) => {
        socket.broadcast.emit("message", data);
      });
    });
  }
}

module.exports = Sockets;
