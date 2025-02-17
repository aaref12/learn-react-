import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Layout from './Layout.jsx'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import Contact from './componants/Contact/Contact.jsx'
import User from './componants/User/User.jsx'
import Github from './componants/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github /> 
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )

 const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    {/* <App/> */}
   
  </React.StrictMode>,
)