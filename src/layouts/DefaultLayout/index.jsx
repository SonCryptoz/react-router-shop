import { Outlet } from "react-router";
import Header from "./Header";

const DefaultLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_42%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.1),transparent_35%)]" />
                <div className="mx-auto min-h-[calc(100vh-81px)] w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DefaultLayout;
