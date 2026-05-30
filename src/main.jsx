import "./utils/firebase";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";



createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <StrictMode>
        {/* <Header/> */}
        <Body />
    </StrictMode>
  </Provider>,
)
