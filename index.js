const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>nevim-ja</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0a; color: #fafafa; }
    .container { text-align: center; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    p { color: #888; }
    code { background: #1a1a1a; padding: 0.2em 0.5em; border-radius: 4px; font-size: 0.9em; }
    .red-circle { width: 100px; height: 100px; background: #e53e3e; border-radius: 50%; margin: 1.5rem auto 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>nevim-ja</h1>
    <p>Running on <code>nevim-ja.pavlin.dev</code></p>
    <p style="margin-top: 1rem; color: #666;">Edit this project and push to deploy.</p>
    <div class="red-circle"></div>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
