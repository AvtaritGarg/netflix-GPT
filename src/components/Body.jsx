import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { auth } from "../utils/firebase"


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: "/Browse",
        element: <Browse/>
    }
])

const Body = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, displayName, email} = user;
            dispatch(addUser({uid:uid, displayName: displayName, email: email}))
            // ...
        } else {
            dispatch(removeUser())
            // User is signed out
            // ...
        }
        });
    },[])


    

        return (
            <div>
                <RouterProvider router={appRouter}/>
            </div>
        )
    }

export default Body