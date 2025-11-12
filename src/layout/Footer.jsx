import {FileText, Github, Mail} from "lucide-react";
import React from "react";

const Footer = ({links}) => {
    return(
    <footer className="relative mt-20 border-t border-neutral-200 dark:border-neutral-900/70 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-neutral-950 z-0"/>
        <div
            className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div>© {new Date().getFullYear()} salcho. All rights reserved.</div>
            <div className="flex items-center gap-5">
                <a href={`mailto:${links.email}`} className="hover:opacity-80 flex items-center gap-1"><Mail
                    className="w-4 h-4"/> 이메일</a>
                <a href={links.github} target="_blank" className="hover:opacity-80 flex items-center gap-1"><Github
                    className="w-4 h-4"/> GitHub</a>
                <a href={links.blog} target="_blank" className="hover:opacity-80 flex items-center gap-1"><FileText
                    className="w-4 h-4"/> Blog</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;