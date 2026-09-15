import { Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";
import ProductPage from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import CartProvider from "./contexts/CartContext";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <CartProvider>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductPage />} />
                        <Route
                            path="products/:productId"
                            element={<ProductDetailsPage />}
                        />
                        <Route path="cart" element={<CartPage />} />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="sign-in" element={<SignInPage />} />
                        <Route path="sign-up" element={<SignUpPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </CartProvider>
        </>
    );
};

export default App;
