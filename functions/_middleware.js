// Working files live in this repo next to the pages. Serve the pages, not the notes.
export async function onRequest(context) {
  const path = new URL(context.request.url).pathname.toLowerCase();
  if (
    path.endsWith(".md") ||
    path.startsWith("/publishing/") ||
    path.startsWith("/scripts/") ||
    path.startsWith("/functions/")
  ) {
    return new Response("Not found", { status: 404 });
  }
  return context.next();
}
