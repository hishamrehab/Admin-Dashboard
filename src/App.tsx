import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Navbar from "./components/Navabar.tsx/Navbar";
import Users from "./pages/Users/Users";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./styles/Main.scss";
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contactContainer">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/users",
          element: <Users />,
        },

        {
          path: "/products",
          element: <ProductsPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
