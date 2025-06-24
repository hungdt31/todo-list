const BASE_URL = '/todo-list';
const routes = {
    HOME: '/',
    TODO: '/board',
};

// First map to create an array of key-value pairs with the BASE_URL included
const pathEntries = Object.entries(routes).map(([key, path]) => {
    // Handle root path specially to avoid double slash
    const fullPath = path === '/' ? BASE_URL : `${BASE_URL}${path}`;
    return [key, fullPath];
});

// Convert back to an object
export const paths = Object.fromEntries(pathEntries);

// Export default for convenience
export default paths;
