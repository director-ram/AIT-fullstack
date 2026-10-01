import { useRoutes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { HighLights } from "../pages/home/highlights/HighLights"
import ProfileCard from "../components/ProfileCard"
import Cart from "../pages/cart/Cart";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/profilecards", element: <ProfileCard /> },
  { path: "/products", element: <HighLights /> },
  { path: '/cart', element: <Cart /> },
  { path: "*", element: <h1>Not Found</h1> },
];

export const AppRouter = () => {
  return useRoutes(routes);
};
