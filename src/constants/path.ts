const BASE_URL = '/todo-list';

// Use as const to get literal types
const Original = {
  HOME: '/',
  TASK: '/task',
  LOGIN: '/login',
  JOURNAL: '/journal',
} as const;

// Extract the keys type
type RouteKeys = keyof typeof Original;

// Create a helper function with proper typing
function createPaths<T extends Record<string, string>>(
  baseUrl: string,
  routes: T,
): Record<keyof T, string> {
  const pathEntries = Object.entries(routes).map(([key, path]) => {
    const fullPath = path === '/' ? baseUrl : `${baseUrl}${path}`;
    return [key, fullPath];
  });

  return Object.fromEntries(pathEntries) as Record<keyof T, string>;
}

// Create paths with proper typing
export const paths = createPaths(BASE_URL, Original);

// Export types
export type { RouteKeys };

// Export default for convenience
export default paths;
