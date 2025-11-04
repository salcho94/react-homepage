import {Link, NavLink} from "react-router-dom";
import {FileText, Github, Moon, Sun} from "lucide-react";
import React from "react";
import HoverNameLogoTag from "@/component/HoverNameLogoTag.jsx";


function NavItem({ to, children, onClick }) {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) => (isActive ? 'active ' : '') + 'hover:opacity-100 opacity-80'}
        >
            <span className="nav-link">{children}</span>
        </NavLink>
    )
}

const Header = ({toggleTheme,theme,links,open,setOpen}) =>{

    return (
        <header
            className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-900/70">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
                <Link to="/" className="font-semibold tracking-tight text-lg"> <HoverNameLogoTag logoSrc="/logo.png" name="Jiseop" size={56} /></Link>

                {/* 데스크탑 내비게이션 */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <NavItem to="/tech">Tech</NavItem>
                    <NavItem to="/experience">Experience</NavItem>
                    <NavItem to="/projects">Projects</NavItem>
                    <NavItem to="/contact">Contact</NavItem>
                    {/*<a className="nav-link flex items-center gap-1" href={links.github} target="_blank"*/}
                    {/*   rel="noreferrer">*/}
                    {/*    <Github className="w-4 h-4"/>GitHub*/}
                    {/*</a>*/}
                    {/*<a className="nav-link flex items-center gap-1" href={links.blog} target="_blank" rel="noreferrer">*/}
                    {/*    <FileText className="w-4 h-4"/>Blog*/}
                    {/*</a>*/}
                </nav>

                {/* 우측 컨트롤 */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                        aria-label="테마 전환"
                    >
                        {theme === 'dark' ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                    </button>
                    <button
                        className="md:hidden text-sm border border-neutral-300 dark:border-neutral-700 rounded px-2 py-1"
                        onClick={() => setOpen(v => !v)}
                    >
                        Menu
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {open && (
                <div className="md:hidden border-t border-neutral-200 dark:border-neutral-900/70">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex flex-col gap-2">
                        <NavItem to="/tech" onClick={() => setOpen(false)}>Tech</NavItem>
                        <NavItem to="/experience" onClick={() => setOpen(false)}>Experience</NavItem>
                        <NavItem to="/projects" onClick={() => setOpen(false)}>Projects</NavItem>
                        <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>

                        <button
                            onClick={() => {
                                toggleTheme();
                                setOpen(false)
                            }}
                            className="mt-3 flex items-center gap-2 text-left px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-xl"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                            {theme === 'dark' ? '라이트 모드' : '다크 모드'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;