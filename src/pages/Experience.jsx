import React from 'react'
import { EXP } from '@/data/common.js'

function diffYearsAndDaysSince(startY, startM0, startD) {
    // UTC 자정 기준으로 계산 (DST 영향 제거)
    const MS_PER_DAY = 24 * 60 * 60 * 1000
    const startUTC = Date.UTC(startY, startM0, startD)

    const now = new Date()
    const todayUTC = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate()
    )

    // 총 경과 일수 (D-day 표기용)
    const totalDays = Math.floor((todayUTC - startUTC) / MS_PER_DAY)

    // 경과 '년' 계산: 올해 기념일이 지났는지 여부로 보정
    let years = now.getUTCFullYear() - startY
    const thisAnnivUTC = Date.UTC(now.getUTCFullYear(), startM0, startD)
    if (todayUTC < thisAnnivUTC) years--

    // 마지막 기념일(마지막 '정확한 년수' 시점)
    const lastAnnivUTC = Date.UTC(startY + years, startM0, startD)
    const days = Math.floor((todayUTC - lastAnnivUTC) / MS_PER_DAY)

    return { years, days, totalDays }
}

export default function Experience() {
    // 시작일: 2020-11-10 (월은 0부터 시작하므로 10이 11월)
    const { years, days, totalDays } = diffYearsAndDaysSince(2020, 10, 10)

    return (
        <section className="section">
            <h2 className="section-title">경력사항</h2>

            {/* ✅ 경력 요약 배지 */}
            <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
               <strong>{years}년 {days}일차</strong> 개발자
                <span className="ml-2 text-neutral-500">D+{totalDays}</span>
            </div>

            <div className="mt-8 space-y-6">
                {EXP.map((e) => (
                    <div key={e.company} className="card p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                    {e.title}{' '}
                                    <span className="font-normal text-neutral-700 dark:text-neutral-300">
                    · {e.company}
                  </span>
                                </h3>
                                <div className="text-neutral-700 dark:text-neutral-400 text-sm mt-1">
                                    {e.period}
                                </div>
                            </div>
                        </div>

                        <p className="text-neutral-800 dark:text-neutral-300 mt-4 leading-relaxed">
                            {e.summary}
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-2 text-neutral-800 dark:text-neutral-300">
                            {e.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {e.tags.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-2 py-1 rounded-full border border-neutral-300 text-neutral-700
                  dark:border-neutral-700 dark:text-neutral-300"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
