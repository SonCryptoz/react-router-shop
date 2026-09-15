import formatPrice from "../../utils/formatPrice";

const CartItem = ({
    product,
    quantity,
    color,
    handleIncrease,
    handleDecrease,
    handleRemove,
}) => {
    return (
        <article
            key={product.id}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:gap-6 sm:p-5"
        >
            <img
                src={product.image}
                alt={product.title}
                className="h-28 w-24 rounded-xl object-cover sm:h-36 sm:w-32"
            />
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                <div className="flex justify-between gap-4">
                    <div>
                        <p className="text-lg font-bold text-slate-950">
                            {product.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                            {product.category} · {color}
                        </p>
                    </div>
                    <p className="font-bold text-slate-950">
                        {formatPrice(product.price * quantity)}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                    <div className="flex items-center rounded-lg border border-slate-200 text-slate-700">
                        <button
                            type="button"
                            onClick={handleDecrease}
                            aria-label={`Decrease ${product.title} quantity`}
                            className="px-3 cursor-pointer py-1.5 text-slate-400 hover:text-slate-950"
                        >
                            -
                        </button>
                        <span className="border-x border-slate-200 px-3 py-1.5 font-semibold">
                            {quantity}
                        </span>
                        <button
                            type="button"
                            onClick={handleIncrease}
                            aria-label={`Increase ${product.title} quantity`}
                            className="px-3 cursor-pointer py-1.5 text-slate-400 hover:text-slate-950"
                        >
                            +
                        </button>
                    </div>
                    <span className="text-slate-500">
                        {formatPrice(product.price)} each
                    </span>
                </div>
                <button
                    type="button"
                    onClick={handleRemove}
                    className="self-start cursor-pointer text-xs font-semibold text-slate-400 hover:text-orange-500"
                >
                    Remove
                </button>
            </div>
        </article>
    );
};

export default CartItem;
