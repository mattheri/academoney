const appConstants = {
  // API_URL: process.env.API_URL || "http://localhost:3000",
  API_URL: process.env.API_URL || "https://money-pie.fly.dev/api/v1",
  USER_ID_COOKIE: "session",
  PASSTHROUGH_SECRET: process.env.PASSTHROUGH_SECRET,
  PASSTHROUGH_QUERY_PARAM: "passthrough",
};

export default appConstants;
