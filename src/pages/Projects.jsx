// src/components/Projects.jsx
import React, { useMemo, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/data/common.js'

const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } },
    viewport: { once: true, amount: 0.15 },
})

export default function Projects() {
    const [filter, setFilter] = useState('All')
    const [sort, setSort] = useState('recent') // 'recent' | 'oldest'

    const tags = useMemo(
        () => ['All', 'React', 'Next.js', 'Spring Boot', 'MyBatis', 'Oracle', 'TailwindCSS', 'Spring MVC'],
        []
    )

    // period의 마지막 구간(종료 연·월)을 정렬 키로 변환: 2025.11 -> 202511
    const periodKey = (period) => {
        if (!period) return 0
        const norm = period.replace(/\s+/g, '').replace(/–/g, '-') // en dash 정규화
        const parts = norm.split('-')
        const last = parts[parts.length - 1] || parts[0]
        const m = last.match(/(?<y>\d{4})(?:\.(?<mo>\d{2}))?/)
        const y = m?.groups?.y ? parseInt(m.groups.y, 10) : 0
        const mo = m?.groups?.mo ? parseInt(m.groups.mo, 10) : 99 // 월이 없으면 뒤로 가도록 99
        return y * 100 + mo
    }

    const list = useMemo(() => {
        const filtered =
            filter === 'All' ? PROJECTS : PROJECTS.filter((d) => d.stack.includes(filter))

        const sorted = [...filtered].sort((a, b) => {
            const ka = periodKey(a.period)
            const kb = periodKey(b.period)
            return sort === 'recent' ? kb - ka : ka - kb
        })

        return sorted
    }, [filter, sort])

    return (
        <section className="section">
            <motion.h2 {...fadeUp()} className="section-title">
                프로젝트 <span className="text-sm text-neutral-500">(💠 회사 프로젝트 / ✳️ 개인·토이 프로젝트)</span>
            </motion.h2>

            {/* 필터 + 정렬 */}
            <motion.div
                {...fadeUp(0.02)}
                className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
            >
                {/* 태그 필터 */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`px-3 py-1.5 shrink-0 rounded-full text-sm border ${
                                filter === t
                                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black border-neutral-900 dark:border-white'
                                    : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* 정렬 토글 */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-500">정렬</span>
                    <div className="inline-flex rounded-full border border-neutral-300 dark:border-neutral-700 p-0.5">
                        <button
                            onClick={() => setSort('recent')}
                            aria-pressed={sort === 'recent'}
                            className={`px-3 py-1 rounded-full ${
                                sort === 'recent'
                                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
                                    : 'text-neutral-700 dark:text-neutral-300'
                            }`}
                        >
                            최신순
                        </button>
                        <button
                            onClick={() => setSort('oldest')}
                            aria-pressed={sort === 'oldest'}
                            className={`px-3 py-1 rounded-full ${
                                sort === 'oldest'
                                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
                                    : 'text-neutral-700 dark:text-neutral-300'
                            }`}
                        >
                            오래된순
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {list.map((p, i) => (
                    <motion.article key={p.name} {...fadeUp(0.03 * i)} className="card p-6 overflow-hidden">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                {p.name} {p.type === 'company' ? '💠' : '✳️'}
                            </h3>
                            <span className="text-xs text-neutral-700 dark:text-neutral-400">{p.period} </span>
                        </div>

                        <p className="mt-2 text-neutral-800 dark:text-neutral-300">{p.description}</p>

                        <ul className="list-disc pl-5 mt-3 space-y-1 text-neutral-800 dark:text-neutral-300">
                            {p.highlights.map((h, idx) => (
                                <li key={idx}>{h}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {p.stack.map((s) => (
                                <span
                                    key={s}
                                    className="text-xs px-2 py-1 rounded-full border border-neutral-300 text-neutral-800 dark:border-neutral-700 dark:text-neutral-300"
                                >
                  {s}
                </span>
                            ))}
                        </div>

                        {p.type !== 'company' && (
                            <div className="mt-5 flex gap-3 text-sm">
                                {p.repo !== '#' && (
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                )}
                                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-solid">
                                    <ExternalLink className="w-4 h-4" /> Live
                                </a>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
