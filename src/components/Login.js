import { useRef, useState } from "react";
import Header from "./Header";
import {validateData} from "../utils/validateData.js"; // Import the validateData function if needed
import { auth} from "../utils/Firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("Button clicked",email,password,fullName);
    const errorMessage = validateData(email.current.value, password.current.value, fullName.current ? fullName.current.value : "");
    console.log("Validation Result:", errorMessage);
    // if (errorMessage != null) {
    //   setError(errorMessage);
    //   return;
    // }

      console.log("All validations passed");

      if(!isSignInForm) {
        // Add sign-up logic here
        console.log("Sign Up Logic Here");
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in:", user);

                // updating user name into our auth
                updateProfile(user, {
                    displayName: fullName.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocL2EVjp1HCcBGY1KD97GAUzP4-uOEogkclQwY5i_dyubqmH81f_=s96-c"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                      'uid': uid, 
                      'email': email, 
                      'displayName': displayName, 
                      'photoURL': photoURL
                    }))
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                navigate("/browse"); // Navigate to the Browse page after successful sign-in

                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing up:", errorCode, errorMessage);
                setError(errorMessage); // Set the error message to state
              });

      }else {
        // Add sign-in logic here
        console.log("Sign In Logic Here");
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in:", user);
                navigate("/browse"); // Navigate to the Browse page after successful sign-in
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing in:", errorCode, errorMessage);
                setError(errorMessage); // Set the error message to state
              });
      }
  }

  return (
    <div>
      <Header />

      <img
        className="w-full h-screen "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="Background Logo"
      />

      <div>
        <form onSubmit={(e)=>e.preventDefault() }>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white py-8 px-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignInForm && (
              <input
                type="text"
                ref={fullName}
                placeholder="Full Name"
                className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
              />
            )}
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-4 my-4 border bg-slate-900 border-gray-300 rounded"
            />
            { (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-4 my-6 rounded hover:bg-red-700"
              onClick={handleButtonClick}
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
