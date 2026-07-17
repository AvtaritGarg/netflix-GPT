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
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

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
            <select
              className="
                appearance-none
                w-21 truncate
                border border-neutral-700 rounded
                bg-neutral-900 text-white text-sm
                py-1 pl-2 pr-4
                cursor-pointer
                bg-no-repeat bg-[right_8px_center] bg-[length:10px]
                bg-[url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 8%27><path d=%27M1 1l5 5 5-5%27 stroke=%27white%27 stroke-width=%272%27 fill=%27none%27/></svg>')]
                "
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
              }}
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
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
