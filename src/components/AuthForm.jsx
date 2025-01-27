import { useSearchParams, Link } from "react-router-dom";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {mode === "signup" ? <SignUpForm /> : <SignInForm />}
        <div className="text-center mt-4">
          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <Link
                to="?mode=login"
                className="text-primary-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <Link
                to="?mode=signup"
                className="text-primary-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
