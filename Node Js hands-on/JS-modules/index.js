// 1. fs module

// fs.readFile()

// const fs = require("fs");
// fs.readFile("../static-files/example.txt", "utf8", (err, data)=>{
//     if(err) {
//         console.error("Error reading file:", err );
//         return;
//     }
//     console.log("File content: ", data)
// });

// fs.writeFile()
// fs.writeFile("example.txt", "I love weekends!", (err)=>{
//     if(err){
//         console.error("Error reading file:", err );
//         return;
//     }
//     console.log("File written successfully!")
// })

// 2. path module
// const path = require("path");

// path.join()
// const filePath = path.join(__dirname, "randomfilename.txt");
// console.log("File path :", filePath);

// path.resolve()
// const absolutePath = path.resolve("static-files/example.txt");
// console.log("Absolute File path :", absolutePath);

// path.basename()
// const basename = path.basename("static-files/example.txt");
// console.log("Basename :", basename);

// path.dirname()
// const dirname = path.dirname("static-files/example.txt");
// console.log("Dirname :", dirname);

// 3. util modlue

// util.format()
// const util = require("util");
// const name = "Node.js";
// const formatttedString = util.format("Hello, %s!", name);
// console.log(formatttedString);


// util.deprecate()

// const deprecatedFunc = util.deprecate(()=>{
//     console.log("This function is deprecated")
// }, "This function will be removed in future!")
// deprecatedFunc();

// util.promisify()

// const readFileSync = util.promisify(fs.readFile);

// readFileSync("../static-files/example.txt", "utf8").then((data)=>{
//     console.log("File content: ", data);
// }).catch((err)=>{
//     console.error("Error reading the file: ", err);
// })

// util.debuglog()
// const debuglog = util.debuglog("myapp");
// debuglog("This is the debug log");

// util.TextEncoder()
// util.TextDecoder()

// const encoder = new util.TextEncoder();
// const decoder = new util.TextDecoder();
// const text = "hello, node.js";
// const encodedText = encoder.encode(text);
// console.log(encodedText);
// const decodedText = decoder.decode(encodedText);
// console.log(decodedText);

// 4. http module

// 5 url module 
// const http = require("http");
// const path = require("path")
// const url = require("url");
// const server = http.createServer((req, res)=>{
//     res.statusCode= 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello, world!");
// });

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     console.log("parsed url : ", parsedUrl);
//     const query = parsedUrl.query;
//     console.log("query : ", query);

//     if (req.url === "/") {
//         const filePath = path.join(__dirname, "..\\static-files", "index.html");
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 res.statusCode = 500;
//                 res.setHeader("Content-Type", "text/plain");
//                 res.end("Internal server error!");
//                 return;
//             }
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/html");
//             res.end(data);
//         })
//     }
//     else if (parsedUrl.pathname === "/home") {
//         const name = query.name || "Guest"
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end(`Hello, ${name}!`);
//     }
//     else if (req.url === "/about") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("This is the about page!");
//     }
//     else if (req.url === "/contactUs") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("This is the contact us page!!");
//     }
//     else {
//         res.statusCode = 404;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Page not found!");
//     }
// });

// server.listen(5000, "127.0.0.1", () => {
//     console.log("Server is running at port 5000")
// })

// 6 queryString
// const queryString = require("querystring");

// queryString.parse()
// const string = "name=JohnDoe&age=25&location=NewYork";
// const parsedString = queryString.parse(string);
// console.log(parsedString)

// queryString.stringify()
// const obj = {
//     name: 'John Doe',
//     age: '25',
//     location: 'New York'
// }

// const string = queryString.encode(obj);
// console.log(string)

// const obj = {
//     name: 'John Doe',
//     age: '25',
//     location: 'New York'
// }

// const string = queryString.stringify(obj, ";", ":");
// console.log(string)

// 7. zlib module
// zlib.createGzip()

// const zlib = require("zlib");

// const input = fs.createReadStream("../static-files/example.txt");
// const output = fs.createWriteStream("../static-files/example.txt.gz");
// input.pipe(zlib.createGzip()).pipe(output);
// output.on("finish", () => {
//     console.log("File successfully compressed")
// })

// zlib.createGunzip()
// const input = fs.createReadStream("../static-files/example.txt.gz");
// const output = fs.createWriteStream("../static-files/example.txt");
// input.pipe(zlib.createGunzip()).pipe(output);
// output.on("finish", ()=>{
//     console.log("File successfully decompressed")
// })


