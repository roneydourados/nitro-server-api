import cors from "cors";

export default defineEventHandler((event) => {
  const { req, res } = event.node;
  new Promise((resolve) => cors()(req, res, resolve));
});
