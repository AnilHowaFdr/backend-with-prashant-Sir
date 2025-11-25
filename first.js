const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding1</title></head>");
    res.write("<body><h1>Welcome</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding2</title></head>");
    res.write("<body><h1>Learning2</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Coding3</title></head>");
  res.write("<body><h1>Learning3</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 4001;

server.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
