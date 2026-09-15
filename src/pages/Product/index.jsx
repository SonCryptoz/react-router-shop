import products from "../../data/products";
import ProductCard from "./ProductCard";

const ProductPage = () => {
    return (
        <div className="space-y-10 pb-8">
            <section className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                        The collection
                    </p>
                    <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        Shop all products
                    </h1>
                    <p className="mt-3 max-w-xl text-slate-500">
                        Thoughtful pieces for everyday living, selected to last
                        and made to be enjoyed.
                    </p>
                </div>
                <p className="text-sm font-semibold text-slate-500">
                    {products.length} items
                </p>
            </section>

            <section className="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default ProductPage;
