import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <img
        className="w-full h-screen "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="Background Logo"
      />

      <div>
        <form className="opcity-90">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white py-8 px-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-4 my-6 rounded hover:bg-red-700"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-400 text-sm">
              {isSignInForm ? "New to Netflix?" : "Already have Netflix?"}{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                {isSignInForm ? "Sign Up now" : "Sign In now"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
