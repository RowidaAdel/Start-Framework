import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/Error/NotFound';
import Layout from './Components/Layout/Layout';
export default function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout/>, children: [
        { index: true, element: <Navigate to ='/home'/> },
        { path: '/home', element: <Home/> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '/*', element: <NotFound/> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
