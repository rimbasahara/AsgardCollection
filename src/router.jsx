import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CartList from "./pages/CartList";
// import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cartlist",
        element: <CartList />,
      },
      {
        // path: "product/:id",
        // element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
