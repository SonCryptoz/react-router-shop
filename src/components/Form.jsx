const Form = ({
    title,
    description,
    submitLabel,
    footer,
    onSubmit,
    children,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8"
        >
            <div className="mb-7">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                    React Router Shop
                </p>
                <h1 className="text-3xl font-black tracking-tight text-slate-950">
                    {title}
                </h1>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>

            <div className="space-y-5">{children}</div>

            <button
                type="submit"
                className="mt-7 cursor-pointer w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
                {submitLabel}
            </button>

            {footer && (
                <p className="mt-5 text-center text-sm text-slate-500">
                    {footer}
                </p>
            )}
        </form>
    );
};

export const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-slate-700"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
            />
        </div>
    );
};

export default Form;
