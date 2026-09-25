// Cloudflare Worker: serve the public, static site files from this repository.
// Task edits go directly from the browser to the GitHub Contents API.
const FILE_TYPES = {
  "index.html": "text/html; charset=utf-8",
  "tailwindcss.min.js": "text/javascript; charset=utf-8",
  "task-data.json": "application/json; charset=utf-8",
  "TAILWIND-LICENSE.txt": "text/plain; charset=utf-8"
};

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const pathname = new URL(request.url).pathname;
    const file = pathname === "/" ? "index.html" : pathname.slice(1);
    if (!Object.hasOwn(FILE_TYPES, file)) {
      return new Response("Not found", { status: 404 });
    }

    const upstream = await fetch(
      `https://raw.githubusercontent.com/yuanlizbyy/4fam-task-graph/main/${file}`,
      { cf: { cacheEverything: true, cacheTtl: 60 } }
    );
    if (!upstream.ok) {
      return new Response("Static source unavailable", { status: 502 });
    }

    return new Response(request.method === "HEAD" ? null : upstream.body, {
      headers: {
        "content-type": FILE_TYPES[file],
        "cache-control": "public, max-age=60",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin"
      }
    });
  }
};
