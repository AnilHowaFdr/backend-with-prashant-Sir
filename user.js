const { create } = require("domain");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding1</title></head>");
    res.write("<body><h1>Enter Your Details :</h1>");
    res.write("<form action='/submit-details' method:'POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter You Name'> <br><br>"
    );
    res.write("<label for='gender'>Gender: </label>");
    res.write("<label for='male'>Male: </label>");
    res.write("<input type='radio' name='gender' id='male' value='male'>");
    res.write("<label for='female'>Female: </label> ");
    res.write(
      "<input type='radio' name='gender' id='female' value='female'> <br><br>"
    );
    res.write("<input type='submit' value='Submit' >");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "anil");
    res.statusCode = 302;
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
