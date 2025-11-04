import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import {TECHS} from '@/data/common.js'



export default function Intro() {
    const [hovered, setHovered] = useState(null)

    return (
        <section className="section">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* 왼쪽: 소개 텍스트 */}
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Full-stack Developer
                        <span className="block text-neutral-700 dark:text-neutral-300 text-xl sm:text-2xl mt-3">
                          React(Next.js) · Spring Boot <br/> TypeScript/Java/JavaScript · MyBatis <br/> Oracle/MySQL
                        </span>
                    </h1>

                    <p className="text-neutral-700 dark:text-neutral-300 mt-6 leading-relaxed max-w-xl">
                        FE 프론트엔드 ( React · Next.js · Tailwind )<br/> BE 백엔드 ( Spring Boot · MyBatis · Oracle/MySQL) 통합적으로 다루며<br />
                        효율적이고 확장 가능한 시스템을 구축합니다.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link to="/projects" className="btn btn-solid">
                            프로젝트 보기 <ChevronRight className="w-4 h-4" />
                        </Link>
                        <Link to="/tech" className="btn btn-ghost">
                            기술 스택
                        </Link>
                    </div>
                </div>

                {/* 오른쪽: 기술 태그 (hover 시 설명 토글) */}
                <div className="grid grid-cols-3 gap-4">
                    {TECHS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="card p-4 text-sm text-center font-medium cursor-pointer relative overflow-hidden"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <AnimatePresence mode="wait">
                                {hovered === i ? (
                                    <motion.div
                                        key="desc"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute inset-0 flex items-center justify-center px-2 text-neutral-400 dark:text-neutral-300 text-[10px]"
                                    >
                                        {t.desc}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="name"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute inset-0 flex items-center justify-center px-2 text-neutral-400 dark:text-neutral-300 text-[13px]"
                                    >
                                        {t.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
