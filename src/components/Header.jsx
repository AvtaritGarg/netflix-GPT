import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
        const { uid, displayName, email, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          }),
        );
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="absolute w-full bg-linear-to-b from-black flex justify-between h-12">
      <div className="w-52 z-10 my-2 mx-16">
        <img src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex h-12 m-6 w-32 justify-between">
          <img className="z-10 w-10 h-10 rounded-md" src={user.photoURL} />
          <button
            className="text-white cursor-pointer pb-3 relative z-20"
            onClick={() => handleButtonClick()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
