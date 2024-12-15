// A string url is given. It contains a URL with the HTTP protocol. Return this URL with the HTTPS protocol.

function http2https(url) {
  if (typeof url !== "string") {
    throw new Error("Input must be a string");
  }
  return url.replace(/^http:/, "https:");
}
