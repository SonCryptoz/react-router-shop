import { Link } from "react-router";
import formatPrice from "../../utils/formatPrice";

const categories = [
    { name: "Everyday wear", count: "128 items", icon: "01" },
    { name: "Home objects", count: "64 items", icon: "02" },
    { name: "Accessories", count: "92 items", icon: "03" },
];

const products = [
    {
        name: "Form ceramic vase",
        category: "Home objects",
        price: "48",
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Daily canvas tote",
        category: "Accessories",
        price: "32",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Soft knit cardigan",
        category: "Everyday wear",
        price: "86",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=85",
    },
];

const HomePage = () => {
    return (
        <div className="space-y-20 pb-8 sm:space-y-24">
            <section className="relative overflow-hidden rounded-4xl bg-slate-950 px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
                <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
                <div className="relative max-w-2xl">
                    <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-orange-400">
                        Curated for everyday living
                    </p>
                    <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
                        Small things, beautifully chosen.
                    </h1>
                    <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                        Discover thoughtful pieces for your wardrobe and your
                        space, made to bring a little more character to every
                        day.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link
                            to="/products"
                            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
                        >
                            Explore collection
                        </Link>
                        <Link
                            to="/products"
                            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            View new arrivals
                        </Link>
                    </div>
                </div>
                <div className="relative mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-5 text-sm text-slate-300 sm:absolute sm:bottom-12 sm:right-12 sm:mt-0 sm:w-80 sm:border-t-0 sm:pt-0">
                    <div>
                        <strong className="block text-2xl text-white">
                            4.9
                        </strong>
                        <span>rating</span>
                    </div>
                    <div>
                        <strong className="block text-2xl text-white">
                            24h
                        </strong>
                        <span>dispatch time</span>
                    </div>
                    <div>
                        <strong className="block text-2xl text-white">
                            30d
                        </strong>
                        <span>easy returns</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                            Browse by mood
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Find your next favorite
                        </h2>
                    </div>
                    <Link
                        to="/products"
                        className="hidden text-sm font-bold text-slate-600 transition hover:text-orange-500 sm:block"
                    >
                        See all products
                    </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to="/products"
                            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <div>
                                <p className="text-lg font-bold text-slate-900">
                                    {category.name}
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    {category.count}
                                </p>
                            </div>
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-xs font-black text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                                {category.icon}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                            The edit
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Made to be kept
                        </h2>
                    </div>
                    <Link
                        to="/products"
                        className="hidden text-sm font-bold text-slate-600 transition hover:text-orange-500 sm:block"
                    >
                        Shop all
                    </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Link
                            key={product.name}
                            to="/products"
                            className="group"
                        >
                            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-slate-200">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-start justify-between gap-4 pt-4">
                                <div>
                                    <p className="text-lg font-bold text-slate-900">
                                        {product.name}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        {product.category}
                                    </p>
                                </div>
                                <p className="font-bold text-slate-900">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="flex flex-col justify-between gap-6 border-y border-slate-200 py-8 sm:flex-row sm:items-center">
                <div>
                    <p className="text-lg font-bold text-slate-950">
                        Good design should feel easy.
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        Free shipping over $75 · Secure checkout · Thoughtful
                        packaging
                    </p>
                </div>
                <Link
                    to="/products"
                    className="shrink-0 text-sm font-bold text-orange-500 hover:text-orange-600"
                >
                    Start shopping
                </Link>
            </section>
        </div>
    );
};

export default HomePage;
