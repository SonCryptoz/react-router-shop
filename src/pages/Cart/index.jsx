import { Link } from "react-router";
import CartItem from "./CartItem";
import formatPrice from "../../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);
    const { items: cart } = state;

    const subtotal = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
    );
    const shipping = subtotal >= 75 ? 0 : 8;
    const total = subtotal + shipping;

    return (
        <div className="space-y-10 pb-8">
            <section className="border-b border-slate-200 pb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                    Your selection
                </p>
                <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                            Shopping cart
                        </h1>
                        <p className="mt-3 text-slate-500">
                            {cart.length} products ready to make their way to
                            you.
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="text-sm font-bold text-orange-500 transition hover:text-orange-600"
                    >
                        Continue shopping
                    </Link>
                </div>
            </section>

            {cart.length === 0 ? (
                <section className="flex min-h-105 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                    <div
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl"
                        aria-hidden="true"
                    >
                        &#128722;
                    </div>
                    <h2 className="mt-6 text-2xl font-black text-slate-950">
                        Your cart is empty
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                        You have not added anything yet. Explore our collection
                        and find something you love.
                    </p>
                    <Link
                        to="/products"
                        className="mt-7 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
                    >
                        Start shopping
                    </Link>
                </section>
            ) : (
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
                    <section className="space-y-4" aria-label="Cart items">
                        {cart.map(({ product, quantity, color }) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                quantity={quantity}
                                color={color}
                                handleIncrease={() =>
                                    dispatch({
                                        type: "increase_item",
                                        payload: { id: product.id },
                                    })
                                }
                                handleDecrease={() =>
                                    dispatch({
                                        type: "decrease_item",
                                        payload: { id: product.id },
                                    })
                                }
                                handleRemove={() =>
                                    dispatch({
                                        type: "remove_item",
                                        payload: { id: product.id },
                                    })
                                }
                            />
                        ))}
                    </section>

                    <aside className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                        <h2 className="text-xl font-bold">Order summary</h2>
                        <div className="mt-6 space-y-4 border-b border-white/15 pb-6 text-sm">
                            <div className="flex justify-between gap-4 text-slate-300">
                                <span>Subtotal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between gap-4 text-slate-300">
                                <span>Shipping</span>
                                <span>
                                    {shipping === 0
                                        ? "Free"
                                        : `${formatPrice(shipping)}`}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 pt-6 text-lg font-bold">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                        <button
                            type="button"
                            className="mt-7 cursor-pointer w-full rounded-full bg-orange-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-400"
                        >
                            Proceed to checkout
                        </button>
                        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                            Secure checkout · Free shipping on orders over $75
                        </p>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default CartPage;
