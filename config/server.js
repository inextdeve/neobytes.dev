const dev = process.env.NODE_ENV === "development";

export const server = dev ? "http://localhost:3000" : "https://inext.dev";

export const cmsServer = dev
  ? "http://38.60.249.19:1337"
  : "http://38.60.249.19:1337";
// export const cmsServer = "http://localhost:3000";
