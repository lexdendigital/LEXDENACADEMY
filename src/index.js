const SECURITY_HEADERS = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "x-frame-options": "DENY",
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "same-origin",
  "cache-control": "no-store",
  "content-security-policy": "default-src 'self'; script-src 'self'; script-src-elem 'self'; script-src-attr 'none'; style-src 'self'; style-src-elem 'self'; style-src-attr 'none'; img-src 'self' data:; connect-src 'none'; object-src 'none'; frame-src 'none'; child-src 'none'; font-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"
};

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) headers.set(name, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return withSecurityHeaders(new Response(JSON.stringify({
        ok: true,
        service: "LEXDEN ACADEMY Assessments",
        version: "1.2.1",
        assetsDirectory: "./site"
      }), {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store"
        }
      }));
    }

    try {
      // Keep asset delivery deterministic even if an older deployment/domain
      // still requests the previous root layout. The current release stores
      // public files in /site, but these aliases make the Worker tolerant of
      // a dashboard upload that preserved the site/ prefix.
      const candidates = [url.pathname];
      if (url.pathname === "/" || url.pathname === "") candidates.push("/index.html");
      else if (!url.pathname.startsWith("/site/")) candidates.push(`/site${url.pathname}`);
      else candidates.push(url.pathname.slice(5) || "/index.html");

      let response = null;
      for (const pathname of candidates) {
        const candidate = new URL(request.url);
        candidate.pathname = pathname;
        response = await env.ASSETS.fetch(new Request(candidate, request));
        if (response.status !== 404) break;
      }
      if (!response || response.status === 404) {
        return withSecurityHeaders(new Response("Not found", { status: 404 }));
      }
      return withSecurityHeaders(response);
    } catch {
      return withSecurityHeaders(new Response("Assessment assets are temporarily unavailable.", {
        status: 503,
        headers: { "content-type": "text/plain; charset=UTF-8" }
      }));
    }
  }
};
