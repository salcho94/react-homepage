import React from 'react'
import {GROUPS} from '@/data/common.js'
export default function Tech() {
    return (
        <section className="section">
            <h2 className="section-title">기술스택</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                개발 언어에 100%의 완성은 없다고 생각합니다.
                대신, 꾸준히 개선하고 익히는 과정을 중요하게 여깁니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {GROUPS.map((g) => (
                    <div key={g.title} className="card p-6">
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                            {g.title}
                        </h3>

                        <div className="space-y-4">
                            {g.items.map((it) => (
                                <div key={it.name}>
                                    <div className="flex justify-between text-sm">
                    <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                      {it.name}
                    </span>
                                        <span className="text-neutral-600 dark:text-neutral-400">
                      {it.level}%
                    </span>
                                    </div>
                                    <div className="h-2 mt-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                                        <div
                                            className="h-full bg-neutral-900 dark:bg-white transition-all"
                                            style={{ width: `${it.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
