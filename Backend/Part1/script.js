import fs from "node:fs";
import { add, sub } from "./math.js";
import http from "node:http";
import { URL, fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
import EventEmitter from "node:events";
import greating from "./calling.js";
import { log } from "node:console";
import mathLibrery from "./Math/index.js";
import quotes from "./Quotes/index.js";

// console.log(sub(15, 10));
// const data = "Hello World!";

// fs.writeFile("output.text", data, (err) => {
//   if (err) console.log("Error is occure");
//   else console.log("File Written Successfully!");
// });

// console.log(1);
// Blocking...
// const result = fs.readFileSync("./input.txt", "utf8");
// console.log(result);

// Non-blocking...
// fs.readFile("./input.txt", "utf8", (err, result) => {
//   if (err) console.log(err?.message);
//   else console.log(result);
// });

// console.log(2);

// fs.appendFile("./input.txt", `\nHello World!`, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.copyFile("./input.txt", "copy.txt", (err) => {
//   if (err) console.log(err);
// });

// fs.mkdir("./test/t1/", { recursive: true }, (err) => {
//   if (err) console.log(err);
// });

// fs.cp(
//   "./test/t1/output.txt",
//   "./test2/t2/backup.txt",
//   { recursive: true },
//   (err) => {
//     if (err) console.log(err);
//   },
// );

// fs.rm("./test2", { recursive: true }, (err) => {
//   if (err) console.log(err);
// });

// fs.rmdir("./test", (err) => {
//   console.log(err?.message);
// });

// fs.unlinkSync("./copy.txt");

// const myPath ="/media/Programming/Web Development/MERN STACK/Backend/course0/script.js";

// const fileName = path.basename(myPath);
// const fileNameWithoutExt = path.basename(myPath, ".js");

// console.log("fileName: " + fileName);
// console.log("fileName without ext: " + fileNameWithoutExt);

// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// const data = await fs.readFile("./log.txt", "utf-8");

// console.log(data);

// const emitter = new EventEmitter();

// const great = (args) => {
//   console.log(`Good Morning ${args.name}, Welcome to ${args.location}`);
// };

// emitter.on("great", great);

// const interval = setInterval(() => {
//   emitter.emit("great", { name: "Foysal", location: "Kushtia" });
// }, 1000);

// setTimeout(() => {
//   emitter.off("great", great);
//   clearInterval(interval);
// }, 5000);

// greating.on("great", greating.great);
// greating.startGreating();

// create first node js server
/*
const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${new Date(Date.now())}: ${req.method} : ${req.url} => New Request Recived...\n`;
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  await fs.appendFile("./log.txt", log);

  switch (myUrl.pathname) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      res.end("About page");
      break;
    case "/contact":
      res.end("Contact page");
      break;
    case "/search":
      const qp = myUrl.searchParams.get("search_query");
      res.end(`Your search result for ` + qp);
      break;
    case "/signup":
      if (req.method === "GET") {
        res.end(`
            <html>
              <body>
                <h1>Sign Up Form</h1>
                <form method="POST" action="/signup">
                  Email: <input type="email" name="email" /><br/>
                  Password: <input type="password" name="password" /><br/>
                  <button type="submit">Create Account</button>
                </form>
              </body>
            </html>
          `);
      } else if (req.method === "POST") res.end("Success!");
      break;
    default:
      res.end("Invalid Page!");
  }
});

server.listen(4001, () => {
  console.log("Sarver Started at http://localhost:4001");
});
*/

// Stream & Buffer
// const redableStream = fs.createReadStream("./bigdata.txt", "utf-8");

// redableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// const server = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return;
//   const route = new URL(req.url, `http://${req.headers.host}`);
//   console.log(route);

//   switch (route.pathname) {
//     case "/":
//       res.write(`
//         <html>
//           <header>
//             <title>
//               Home
//             </title>
//           </header>

//           <body>
//             <h1>Welcome to Home.</h1>
//           </body>
//         </html>
//         `);
//       res.end();
//       break;
//     case "/form":
//       res.write(`
//         <html>
//           <header>
//             <title>
//               Form
//             </title>
//           </header>

//           <body>
//             <form method="POST" action="/process">
//               <input name="massage"/>
//             </form>
//           </body>
//         </html>
//         `);
//       res.end();
//       break;
//     case "/process":
//       if (req.method === "POST") {
//         const data = [];
//         req.on("data", (chunk) => {
//           data.push(chunk);
//         });

//         req.on("end", () => {
//           console.log("Stream finished!");
//           const parseData = Buffer.concat(data).toString();
//           console.log(parseData);
//         });
//       }

//       res.write("Thank You!");
//       res.end();
//       break;
//     case "/about":
//       res.end(`Hello ${route.searchParams.get("name")}`);
//       break;
//     case "/search":
//       const qp = route.searchParams.get("search_query");
//       res.end(`Your search result for ` + qp);
//       break;
//     default:
//       res.write("Invalid Path!");
//       res.end();
//   }
// });

// server.listen("4000", () => {
//   console.log(`Server Started at http://localhost:4000`);
// });

// const redableStream = fs.createReadStream("./bigdata.txt", "utf-8");
// const writeStream = fs.createWriteStream("./output.txt", "utf-8");

// redableStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// redableStream.on("end", () => {
//   console.log("Stream Finished!");
// });

// redableStream.pipe(writeStream);

// const server = http.createServer((req, res) => {
//   const redableStream = fs.createReadStream("./bigdata.txt", "utf8");

//   redableStream.pipe(res);

//   redableStream.on("end", () => {
//     console.log("Operation Completed!");
//   });
// });

// server.listen("4000", () => {
//   console.log(`Server Started at http://localhost:4000`);
// });

const app = {};

app.config = {
  timeBetweenQuotes: 1000,
};

app.printAllQuotes = async () => {
  const allQuotes = await quotes.getQuoutes();

  const length = allQuotes.length;

  const randomNumber = mathLibrery.generateRandomNum(1, length);

  const selectedQuote = allQuotes[randomNumber - 1];

  console.log(selectedQuote);
};

app.infinityLoop = async () => {
  await setInterval(app.printAllQuotes, app.config.timeBetweenQuotes);
};

app.infinityLoop();
