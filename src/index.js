const SECURITY_HEADERS = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "x-frame-options": "DENY",
  "cache-control": "no-store",
  "content-security-policy": "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; style-src-attr 'none'; script-src-attr 'none'"
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
        version: "1.1.3",
        assetsDirectory: "."
      }), {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8"
        }
      }));
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse);
  }
};
