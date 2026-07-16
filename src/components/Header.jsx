import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch)

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
  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };
  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full bg-linear-to-b from-black flex justify-between h-12">
      <div className="w-52 z-10 my-2 mx-16">
        <img src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex h-12 m-6 w-76 justify-between">
          <div className="relative z-20 w-20 pt-2 text-lg text-white">
            {gptSearch && (<select className=" h-12 w-21 px-1 rounded-sm -mt-4" onChange={handleChangeLanguage}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>)}
          </div>
          <button
            className="h-10 px-2 rounded-sm text-white cursor-pointer relative z-20 mt-0.5 text-lg hover:underline"
            onClick={handleGptToggle}
          >
            Ask AI
          </button>
          <img className="z-10 w-10 h-10 rounded-md" src={user.photoURL} />
          <button
            className="h-10 px-2 rounded-sm text-white cursor-pointer relative z-20  text-lg hover:underline"
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
