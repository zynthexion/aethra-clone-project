// Vercel serverless function entry point
// Bridges the TanStack Start Web Fetch API handler to Vercel Node.js runtime

export default async function handler(req, res) {
  const { default: server } = await import("../dist/server/server.js");

  // Build the full URL
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = `${protocol}://${host}${req.url}`;

  // Read body for non-GET/HEAD requests
  let body = undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;
  }

  // Create a Web API Request
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body,
    duplex: "half",
  });

  // Call the TanStack Start fetch handler
  const response = await server.fetch(request);

  // Write status and headers
  res.statusCode = response.status;
  for (const [key, value] of response.headers.entries()) {
    res.setHeader(key, value);
  }

  // Stream the body back
  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}
