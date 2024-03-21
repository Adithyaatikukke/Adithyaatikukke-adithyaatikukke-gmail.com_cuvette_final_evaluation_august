import SignUp from "./components/SignUp/SignUp";
import SignInPage from "./pages/SignInPage/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/homePage/homePage";
import HeaderPage from "./pages/headerPage/headerPage";
import Cart from "./components/Cart/Cart";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CheckOut from "./components/CheckOut/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
