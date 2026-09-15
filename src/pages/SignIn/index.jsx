import { Link } from "react-router";
import Form, { FormInput } from "../../components/Form";

const SignInPage = () => {
    return (
        <div className="flex w-full min-h-[calc(100vh-81px)] items-center justify-center py-8">
            <Form
                title="Welcome back"
                description="Sign in to continue shopping with us."
                submitLabel="Sign in"
                footer={
                    <>
                        Don&apos;t have an account?{" "}
                        <Link to="/sign-up" className="font-semibold text-orange-500 hover:text-orange-600">
                            Sign up
                        </Link>
                    </>
                }
            >
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />
                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                />
            </Form>
        </div>
    );
};

export default SignInPage;
