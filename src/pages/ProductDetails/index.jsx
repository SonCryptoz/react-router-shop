import { Link, useNavigate, useParams } from "react-router";
import { useContext } from "react";
import products from "../../data/products";
import formatPrice from "../../utils/formatPrice";
import { CartContext } from "../../contexts/CartContext";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { dispatch } = useContext(CartContext);
    const product = products.find((item) => item.id === Number(productId));

    if (!product) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                    Product unavailable
                </p>
                <h1 className="mt-3 text-3xl font-black text-slate-950">
                    We could not find that product.
                </h1>
                <Link
                    to="/products"
                    className="mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
                >
                    Back to products
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch({
            type: "add_item",
            payload: { product, color: product.colors[0] },
        });
        navigate("/cart");
    };

    return (
        <div className="space-y-12 pb-8">
            <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-orange-500"
            >
                Back to products
            </Link>

            <section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="relative overflow-hidden rounded-3xl bg-slate-200">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-square h-full w-full object-cover"
                    />
                    {product.originalPrice && (
                        <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                            Sale
                        </span>
                    )}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                        {product.category}
                    </p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        {product.title}
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-amber-500">
                            <span aria-hidden="true">&#9733;</span> {product.rating}
                        </span>
                        <span className="text-slate-400">({product.reviews} reviews)</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="font-semibold text-emerald-600">In stock</span>
                    </div>

                    <div className="mt-7 flex items-baseline gap-3">
                        <span className="text-3xl font-black text-slate-950">
                            {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-slate-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                    </div>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
                        {product.description}
                    </p>

                    <div className="mt-8 border-y border-slate-200 py-6">
                        <p className="text-sm font-bold text-slate-900">Available colors</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {product.colors.map((color) => (
                                <span
                                    key={color}
                                    className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600"
                                >
                                    {color}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500"
                        >
                            Add to cart
                        </button>
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-500"
                        >
                            Keep browsing
                        </Link>
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                        <div className="rounded-xl bg-slate-50 px-2 py-3">Free shipping over $75</div>
                        <div className="rounded-xl bg-slate-50 px-2 py-3">30-day returns</div>
                        <div className="rounded-xl bg-slate-50 px-2 py-3">Secure checkout</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;
