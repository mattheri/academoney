export const routes = {
  INDEX: "/",
  auth: {
    LOGIN: "/loginForm",
    REGISTER: "/register",
  },
  api: {
    LOGIN: "/api/auth/loginForm",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
  },
} as const;
