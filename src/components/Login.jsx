import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { PROFILE, WALLPAPER } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate email and password
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value,
    );
    setErrorMessage(message);
    if (message === null) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value,
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullName?.current?.value,
              photoURL: PROFILE,
            })
              .then(() => {
                const { uid, displayName, email, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                  }),
                );
              })
              .catch((error) => {});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
      if (isSignInForm) {
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value,
        )
          .then((userCredential) => {})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={WALLPAPER} alt="background" className="" />
      </div>

      <div className="absolute bg-black my-44 mx-auto right-0 left-0 w-92 opacity-80 rounded-lg">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white text-5xl p-4 pt-8 ml-6 font-bold cursor-default">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="rounded-lg bg-gray-400 m-4 p-2 w-70 ml-11"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"
          />

          <p className="text-red-600 mx-7 px-6 w-10/12 text-center">
            {errorMessage}
          </p>

          <button
            className="bg-red-800 w-70 m-4 p-2 ml-11 rounded-lg  cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white opacity-100 ml-11 pt-4 pb-6 mb-8 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {!isSignInForm
              ? "Already Registered? Click here to Sign In now "
              : "New to netflix? Click here to Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
