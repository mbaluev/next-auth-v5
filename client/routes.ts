/**
 * an array of routes that are accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  `${process.env.APP_URL}`,
  `${process.env.APP_URL}/auth/new-verification`,
];

/**
 * an array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  `${process.env.APP_URL}/auth/login`,
  `${process.env.APP_URL}/auth/register`,
  `${process.env.APP_URL}/auth/error`,
  `${process.env.APP_URL}/auth/reset`,
  `${process.env.APP_URL}/auth/new-password`,
];

/**
 * the prefix for API authentication routes
 * routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = `${process.env.APP_URL}/api/auth`;

/**
 * the default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = `${process.env.APP_URL}/settings`;
