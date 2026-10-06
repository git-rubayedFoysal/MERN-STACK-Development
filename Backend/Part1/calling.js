import EventEmitter from "node:events";

class Greating extends EventEmitter {
  great(args) {
    console.log(`Good Morning ${args.name}, Welcome to ${args.location}`);
  }
  startGreating() {
    console.log("Hello...");

    const interval = setInterval(() => {
      this.emit("great", { name: "Foysal", location: "Kushtia" });
    }, 1000);

    setTimeout(() => {
      this.off("great", this.great);
      clearInterval(interval);
    }, 5000);
  }
}

const greating = new Greating();
export default greating;
