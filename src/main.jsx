import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact.jsx'
import '@/index.css'
import '@/style.css'
import Experience from "@/pages/Experience.jsx";
import AppLayout from "@/layout/AppLayout.jsx";
import TechPage from "@/pages/Tech.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'tech', element: <TechPage /> },
            { path: 'projects', element: <Projects /> },
            { path: 'experience', element: <Experience /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
