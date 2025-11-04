import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovpnoyz"

export default function Contact() {
    const [log, setLog] = useState(["💻 개발자한테 메일전송 대기중..."])
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        setLoading(true)
        setLog((prev) => [...prev, "메일이 전송중입니다 잠시만 기다려 주세요..."])

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setSent(true)
                setLog((prev) => [...prev, "✅ 메일전송이 완료되었습니다."])
            } else {
                throw new Error("HTTP " + res.status)
            }
        } catch (err) {
            setLog((prev) => [...prev, `❌ 오류: ${err.message}`])
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="section">
            <h2 className="section-title">문의하기</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* === IDE 스타일 폼 === */}
                <form
                    onSubmit={onSubmit}
                    className="rounded-2xl border border-neutral-300 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-950/70 backdrop-blur"
                >
                    {/* 상단 탭 */}
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-200 dark:border-neutral-900">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-3 text-xs text-neutral-600 dark:text-neutral-400">
            </span>
                    </div>

                    {/* 코드 입력부 */}
                    <div className="p-5 font-mono text-[13px] space-y-3 text-neutral-800 dark:text-neutral-200">
                        {/* Name */}
                        <label className="flex items-center gap-2">
                            <span className="text-sky-600 dark:text-sky-400">const</span>
                            <span className="text-rose-600">name</span>
                            <span className="text-neutral-500">=</span>
                            <input
                                required
                                name="name"
                                placeholder="'이름을 적어주세요'"
                                className="flex-1 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 bg-transparent
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-neutral-500">;</span>
                        </label>

                        {/* Email */}
                        <label className="flex items-center gap-2">
                            <span className="text-sky-600 dark:text-sky-400">const</span>
                            <span className="text-rose-600">email</span>
                            <span className="text-neutral-500">=</span>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="'회신받을 이메일을 적어주세요'"
                                className="flex-1 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 bg-transparent
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-neutral-500">;</span>
                        </label>

                        {/* Message */}
                        <div className="flex items-start gap-2">
                            <span className="text-sky-600 dark:text-sky-400">let</span>
                            <span className="text-rose-600">message</span>
                            <span className="text-neutral-500">=</span>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                placeholder="'문의내용을 적어주세요'"
                                className="flex-1 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 bg-transparent
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            />
                            <span className="text-neutral-500">;</span>
                        </div>

                        <button
                            disabled={sent || loading}
                            className="btn btn-solid mt-3 disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>

                {/* === 로그 영역 === */}
                <div
                    className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-black text-green-400 font-mono text-sm p-4 overflow-y-auto"
                    style={{maxHeight: 420}}
                >
                    <div className="text-neutral-400 text-xs mb-2">[System Log]</div>
                    {log.map((line, i) => (
                        <div key={i} className="whitespace-pre-wrap">
                            {`> ${line}`}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
