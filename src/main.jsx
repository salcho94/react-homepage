// router.jsx
import React, { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/layout/AppLayout.jsx'
import NotFound from '@/pages/NotFound.jsx'
import '@/index.css'
import '@/style.css'

// ✅ route-level code splitting
const Home = lazy(() => import('@/pages/Home'))
const TechPage = lazy(() => import('@/pages/Tech.jsx'))
const Projects = lazy(() => import('@/pages/Projects'))
const Experience = lazy(() => import('@/pages/Experience.jsx'))
const Contact = lazy(() => import('@/pages/Contact.jsx'))


const Page = ({ children }) => (
    <Suspense
        fallback={
            <div className="min-h-[50vh] grid place-items-center text-neutral-500">
                로딩 중…
            </div>
        }
    >
        {children}
    </Suspense>
)


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Page><Home /></Page> },
                { path: 'tech', element: <Page><TechPage /></Page> },
                { path: 'projects', element: <Page><Projects /></Page> },
                { path: 'experience', element: <Page><Experience /></Page> },
                { path: 'contact', element: <Page><Contact /></Page> },
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
