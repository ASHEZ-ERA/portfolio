import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
  </Route>
)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
