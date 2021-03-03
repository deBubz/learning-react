// serverless fucntions (lambdas)

export default function handler(req, res) {
  res.status(200).json({ text: "hello" });
}

// req - instance of http.IncomingMessage and some pre-built middleware
// https://nextjs.org/docs/api-routes/api-middlewares
// res - instance of http.ServerResponse and sosme helper functions
// https://nextjs.org/docs/api-routes/response-helpers
