import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url   = import.meta.env.KV_REST_API_URL;
  const token = import.meta.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return new Response(JSON.stringify({ count: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const countOnly = new URL(request.url).searchParams.get("count_only") === "1";

  const res = countOnly
    ? await fetch(`${url}/get/portfolio_visitors`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    : await fetch(`${url}/incr/portfolio_visitors`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

  const data = await res.json() as { result: number };

  return new Response(JSON.stringify({ count: data.result }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
