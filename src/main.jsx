// router.jsx
import React, { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/layout/AppLayout.jsx'
import NotFound from '@/pages/NotFound.jsx'
import '@/index.css'
import '@/style.css'

const Home = lazy(() => import('@/pages/Home'))
const TechPage = lazy(() => import('@/pages/Tech.jsx'))
const Projects = lazy(() => import('@/pages/Projects'))
const Experience = lazy(() => import('@/pages/Experience.jsx'))
const Contact = lazy(() => import('@/pages/Contact.jsx'))



const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: 'tech', element: <TechPage /> },
                { path: 'projects', element: <Projects /> },
                { path: 'experience', element: <Experience /> },
                { path: 'contact', element: <Contact /> },
                { path: '*', element: <NotFound /> },
            ],
        },
        { path: '*', element: <NotFound /> },
    ],
)


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
