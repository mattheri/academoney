export const routes = {
  INDEX: "/",
  auth: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  api: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
  },
} as const;
