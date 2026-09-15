import { NavLink, Link } from "react-router";

const Header = () => {
    const navLinkClass = ({ isActive }) =>
        `relative transition-colors duration-200 ${
            isActive
                ? "font-semibold text-slate-950 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-orange-500"
                : "text-slate-500 hover:text-slate-950"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
                <Link
                    to="/"
                    className="shrink-0 text-2xl font-black tracking-tight text-slate-950"
                >
                    React Router Shop
                </Link>

                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-8 text-sm md:flex"
                >
                    <NavLink to="/" className={navLinkClass} end>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={navLinkClass}>
                        Products
                    </NavLink>
                    <NavLink to="/cart" className={navLinkClass}>
                        Cart
                    </NavLink>
                </nav>

                <div className="flex items-center gap-2 text-sm">
                    <Link
                        to="/sign-in"
                        className="hidden rounded-full px-4 py-2.5 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:inline-flex"
                    >
                        Sign in
                    </Link>
                    <Link
                        to="/sign-up"
                        className="rounded-full bg-slate-950 px-4 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
