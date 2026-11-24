const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dirname, "data");
const COUNT_FILE = path.join(DATA_DIR, "sparks.json");
const PUBLIC_FILES = {
  "/": ["iskra.html", "text/html; charset=utf-8"],
  "/iskra.html": ["iskra.html", "text/html; charset=utf-8"],
  "/script.js": ["script.js", "text/javascript; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/lit-photo.jpg": ["lit-photo.jpg", "image/jpeg"],
};
const clients = new Set();

fs.mkdirSync(DATA_DIR, { recursive: true });

let sparkCount = 0;
if (fs.existsSync(COUNT_FILE)) {
  const saved = JSON.parse(fs.readFileSync(COUNT_FILE, "utf8"));
  if (!Number.isSafeInteger(saved.count) || saved.count < 0) {
    throw new Error(`Invalid spark count in ${COUNT_FILE}`);
  }
  sparkCount = saved.count;
} else {
  fs.writeFileSync(COUNT_FILE, JSON.stringify({ count: sparkCount }), "utf8");
}

function saveSparkCount(count) {
  const temporaryFile = `${COUNT_FILE}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify({ count }), "utf8");
  fs.renameSync(temporaryFile, COUNT_FILE);
}

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
}

function broadcastSparkCount() {
  const message = `data: ${JSON.stringify({ count: sparkCount })}\n\n`;
  for (const client of clients) client.write(message);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/api/sparks") {
    if (request.method === "GET") {
      sendJson(response, 200, { count: sparkCount });
      return;
    }
    if (request.method === "POST") {
      const nextCount = sparkCount + 1;
      if (!Number.isSafeInteger(nextCount)) {
        sendJson(response, 500, { error: "Spark count limit reached." });
        return;
      }
      try {
        saveSparkCount(nextCount);
      } catch (error) {
        console.error("Could not save the spark count:", error);
        sendJson(response, 500, { error: "Could not save the spark count." });
        return;
      }
      sparkCount = nextCount;
      broadcastSparkCount();
      sendJson(response, 200, { count: sparkCount });
      return;
    }
    response.writeHead(405, { Allow: "GET, POST" });
    response.end();
    return;
  }

  if (url.pathname === "/api/sparks/events") {
    if (request.method !== "GET") {
      response.writeHead(405, { Allow: "GET" });
      response.end();
      return;
    }
    response.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });
    response.write(`data: ${JSON.stringify({ count: sparkCount })}\n\n`);
    clients.add(response);
    response.on("close", () => clients.delete(response));
    return;
  }

  if (request.method !== "GET") {
    response.writeHead(405, { Allow: "GET" });
    response.end();
    return;
  }

  const file = PUBLIC_FILES[url.pathname];
  if (!file) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": file[1],
    "X-Content-Type-Options": "nosniff",
  });
  fs.createReadStream(path.join(__dirname, file[0])).pipe(response);
});

const heartbeat = setInterval(() => {
  for (const client of clients) client.write(": keep-alive\n\n");
}, 25000);
heartbeat.unref();

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Іскра is running on port ${PORT}`);
});
