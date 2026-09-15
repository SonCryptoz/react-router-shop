import { Link } from "react-router";
import Form, { FormInput } from "../../components/Form";

const SignUpPage = () => {
    return (
        <div className="flex w-full min-h-[calc(100vh-81px)] items-center justify-center py-8">
            <Form
                title="Create an account"
                description="Join us and discover something you will love."
                submitLabel="Create account"
                footer={
                    <>
                        Already have an account?{" "}
                        <Link to="/sign-in" className="font-semibold text-orange-500 hover:text-orange-600">
                            Sign in
                        </Link>
                    </>
                }
            >
                <FormInput
                    label="Full name"
                    name="name"
                    placeholder="Your full name"
                    required
                />
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
                    placeholder="Create a password"
                    required
                />
                <FormInput
                    label="Confirm password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Repeat your password"
                    required
                />
            </Form>
        </div>
    );
};

export default SignUpPage;
