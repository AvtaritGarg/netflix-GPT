import { useState } from "react"


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    

    return (
        <div>
            <div className="absolute -z-10">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
                alt = "background"
                className=""
                />
            </div>

            <div className="absolute bg-black my-44 mx-auto right-0 left-0 w-3/12 opacity-80 rounded-lg">
            
            <form className="">
                <h1 className="text-white text-5xl p-4 pt-8 ml-6 font-bold cursor-default">
                    {isSignInForm? "Sign In":"Sign Up"}
                    </h1>

                {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"/>
                )
                }
                <input type="text" placeholder="Email Address" className= "rounded-lg bg-gray-400 m-4 p-2 w-70 ml-11"/>
                <input type="text" placeholder="Password" className="m-4 p-2 w-70 ml-11 rounded-lg bg-gray-400"/>


                <button className= "bg-red-800 w-70 m-4 p-2 ml-11 rounded-lg  cursor-pointer ">
                    {isSignInForm? "Sign In": "Sign Up"}
                </button>
                <p className= "text-white opacity-100 ml-11 pt-4 pb-6 mb-8 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "Already Registered? Sign In now ": "New to netflix? Sign Up Now"}</p>
            </form>
            </div>
        </div>
    )
}


export default Login