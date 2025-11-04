// src/components/HoverNameLogoTag.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/** 로고 ↔ 이름 전환: 페이드+슬라이드, 다크 모드 대비 보장 */
export default function HoverNameLogoTag({ logoSrc, name, size = 56, className = '' }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`relative overflow-hidden select-none ${className}`}
            style={{ width: size, height: size, borderRadius: '50%' }} // 윤곽/보더 없음, 동그라미만 유지
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AnimatePresence mode="wait">
                {!hovered ? (
                    <motion.img
                        key="logo"
                        src={logoSrc}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain
                       /* 다크에선 자동 반전으로 대비 확보 */
                       dark:invert"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        draggable="false"
                    />
                ) : (
                    <motion.div
                        key="name"
                        className="absolute inset-0 grid place-items-center
                       text-[13px] font-semibold
                       text-neutral-900 dark:text-white"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                        {name}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
