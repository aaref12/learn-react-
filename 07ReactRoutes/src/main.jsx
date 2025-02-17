
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import createRoot from 'react-dom/client'
import { BrowserRouter, Router, RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componants/Home/Home.jsx'




const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home />
        },
      //   {
      //     path: "about",
      //     element: <About />
      //   },
      //   {
      //     path: "contact",
      //     element: <Contact />
      //   }
       ]
    // }
      }
  ])





 const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
   <RouterProvider router={router}/>
  </BrowserRouter>
)
