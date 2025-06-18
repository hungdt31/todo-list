import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '@/route';

export default function App() {
    return (
        <Routes>
            <Route element={<PublicRoutes.layout />}>
                {PublicRoutes.routes.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={<item.element />}
                    />
                ))}
            </Route>
        </Routes>
    );
}
