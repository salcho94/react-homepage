import React, {Suspense, useEffect, useState} from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Footer from "@/layout/Footer.jsx";
import Header from "@/layout/Header.jsx";
import CustomCursor from "@/component/CustomCursor.jsx";

const LINKS = {
    github: 'https://github.com/salcho94',
    blog: 'https://salcho-blog.kro.kr',
    email: 'salcho94@naver.com',
}

export default function AppLayout() {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const saved =
            localStorage.getItem('theme') ??
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        setTheme(saved)
        document.documentElement.classList.toggle('dark', saved === 'dark')
    }, [])

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        localStorage.setItem('theme', next)
        document.documentElement.classList.toggle('dark', next === 'dark')
    }

    return (
        <Suspense
            fallback={
                <div className="min-h-[50vh] grid place-items-center text-neutral-500">
                    로딩 중…
                </div>
            }
        >
        <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
            <CustomCursor />
            <div className="body-bg" />
            <Header toggleTheme ={toggleTheme} theme={theme} links={LINKS} open={open} setOpen={setOpen}/>
            <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 w-full">
                <Outlet />
            </main>
            <Footer links={LINKS}/>
        </div>
        </Suspense>
    )
}

