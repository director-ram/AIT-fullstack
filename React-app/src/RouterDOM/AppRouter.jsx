// import { useRoutes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { HighLights } from "../pages/home/highlights/HighLights"
import ProfileCard from "../components/ProfileCard"
import Cart from "../pages/cart/Cart";
import SignUp from "../components/Authpage/SignUp";
import Login from "../components/Authpage/Login";
import SingleProduct from "../pages/products/product/singleProduct";
import { Route, Routes } from "react-router-dom";
import App1 from "../App1";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/profilecards", element: <ProfileCard /> },
  { path: "/products", element: <HighLights /> },
  {path:'/practice',element: <App1/>},
  {path:"/products/:id", element:<SingleProduct/> },
  { path: '/cart', element: <Cart /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <h1>Not Found</h1> },
];

export const AppRouter = () => {
  return (
    <>
    <Routes>

       { routes.map(route=>(
        <Route path={route.path} element={route.element}/>
       ))}

    </Routes>
    </>
  )
};
