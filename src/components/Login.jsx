import { useState, useRef  } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState("")
    
    const email = useRef(null)
    const password = useRef(null)
    const fullName = useRef(null)

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        // Validate email and password
        const message = checkValidData(email?.current?.value,password?.current?.value,fullName?.current?.value)
        setErrorMessage(message);
        if(message === null){
            if(!isSignInForm){
                createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")

                    dispatch(addUser(user))
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
            }
            if(isSignInForm){
                signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
            }
        }
    }


    return (
        <div>
            <Header/>
            <div className="absolute -z-10">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
                alt = "background"
                className=""
                />
            </div>

            <div className="absolute bg-black my-44 mx-auto right-0 left-0 w-3/12 opacity-80 rounded-lg">
            
            <form className="" onSubmit={(e)=> e.preventDefault()}>
                <h1 className="text-white text-5xl p-4 pt-8 ml-6 font-bold cursor-default">
                    {isSignInForm? "Sign In":"Sign Up"}
                    </h1>

                {!isSignInForm && (
                    <input
                    ref={fullName} 
                    type="text" 
                    placeholder="Full Name" 
                    className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"/>
                )
                }
                <input
                ref= {email}
                 type="text" 
                 placeholder="Email Address" 
                 className= "rounded-lg bg-gray-400 m-4 p-2 w-70 ml-11"
                 />
                <input 
                 ref = {password}
                    type="password" 
                    placeholder="Password" 
                    className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"
                    />

                
                <p className="text-red-600 mx-7 px-6 w-10/12 text-center">{errorMessage}</p>


                <button className= "bg-red-800 w-70 m-4 p-2 ml-11 rounded-lg  cursor-pointer" 
                    onClick={
                        handleButtonClick
                    }>
                    {isSignInForm? "Sign In": "Sign Up"}
                </button>
                <p className= "text-white opacity-100 ml-11 pt-4 pb-6 mb-8 cursor-pointer" onClick={toggleSignInForm}>{!isSignInForm? "Already Registered? Click here to Sign In now ": "New to netflix? Click here to Sign Up Now"}</p>
            </form>
            </div>
        </div>
    )
}


export default Login