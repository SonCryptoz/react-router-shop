import { Link } from "react-router";
import formatPrice from "../../utils/formatPrice";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="group">
            <article>
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-200">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {product.originalPrice && (
                        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                            Sale
                        </span>
                    )}
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                    <div>
                        <p className="text-lg font-bold text-slate-950">
                            {product.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                            {product.category}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-slate-950">
                            {formatPrice(product.price)}
                        </p>
                        {product.originalPrice && (
                            <p className="text-xs text-slate-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-amber-500">
                        <span aria-hidden="true">&#9733;</span> {product.rating}{" "}
                        ({product.reviews})
                    </span>
                    <span
                        className={
                            product.stock < 10
                                ? "font-semibold text-orange-600"
                                : "text-slate-500"
                        }
                    >
                        {product.stock < 10 ? "Low stock" : "In stock"}
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
