import React, { useEffect, useMemo, useRef, useState } from "react";
// 404 IDE-Style Page — JSX (no TypeScript)
// Tailwind CSS required. No external libs.

export default function NotFoundIDE() {
    const [log, setLog] = useState([
        "Router: 경로 탐색 시작...",
        "해당 라우트 경로가 존재하지 않습니다...",
    ]);
    const [copied, setCopied] = useState(false);
    const [query, setQuery] = useState("");
    const [pulse, setPulse] = useState(true);
    const [debug, setDebug] = useState(false);
    const errorId = useMemo(
        () => `ERR-${Math.random().toString(36).slice(2, 8).toUpperCase()}-${Date.now().toString().slice(-6)}`,
        []
    );

    const missingPath = typeof window !== "undefined" ? window.location.pathname : "/unknown";

    // streaming logs effect
    useEffect(() => {
        const script = [
            `⛔ path를 확인해주세요: '${missingPath}'`,
            "대체 라우트 검색 중... /, /projects, /contact",
            "프리패치 캐시 점검... OK",
            "정적 자원 맵 확인... OK",
            "💡 제안: 상단 로고버튼 클릭해주세요",
        ];
        let i = 0;
        const t = setInterval(() => {
            setLog((p) => (i < script.length ? [...p, script[i++]] : p));
        }, 420);
        return () => clearInterval(t);
    }, [missingPath]);

    // subtle pulse for caret / status
    useEffect(() => {
        const t = setInterval(() => setPulse((p) => !p), 700);
        return () => clearInterval(t);
    }, []);

    useKonami(() => setDebug((d) => !d));

    function goHome() {
        if (typeof window !== "undefined") window.location.href = "/";
    }

    function openMail() {
        const subject = encodeURIComponent(`[404 보고] ${errorId}`);
        const body = encodeURIComponent(
            `페이지: ${missingPath}\n오류ID: ${errorId}\n브라우저: ${typeof navigator !== 'undefined' ? navigator.userAgent : '-'}`
        );
        window.location.href = `mailto:admin@example.com?subject=${subject}&body=${body}`;
    }

    async function copyId() {
        try {
            await navigator.clipboard.writeText(errorId);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {}
    }

    function onSearchKey(e) {
        if (e.key === "Enter") {
            const q = query.trim();
            if (!q) return goHome();
            // fallback site search (replace with your search route)
            window.location.href = `/search?q=${encodeURIComponent(q)}`;
        }
    }

    return (
        <main className="relative min-h-[calc(100dvh)] bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            {/* background grid + radial */}
            <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(99,102,241,.25),transparent_45%),radial-gradient(circle_at_70%_120%,rgba(16,185,129,.18),transparent_35%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.12]" aria-hidden>
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.7" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-neutral-800 dark:text-neutral-200" />
                </svg>
            </div>

            {/* center container */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <header className="flex items-center gap-3">
                    <div className="text-4xl font-black tracking-tight">404</div>
                    <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-800" />
                    <p className="text-neutral-600 dark:text-neutral-400">NOT FOUND</p>
                </header>

                <div className="mt-8 grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-start">
                    {/* IDE-like card */}
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
                        {/* window controls + path */}
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <span className="w-3 h-3 rounded-full bg-green-500/80" />
                            <div className="ml-3 text-xs text-neutral-600 dark:text-neutral-400 truncate">{missingPath}</div>
                            <span className={`ml-auto text-[10px] ${pulse ? "opacity-100" : "opacity-30"}`}>● LIVE</span>
                        </div>

                        {/* editor body */}
                        <div className="p-6 md:p-8 grid gap-5">
                            {/* command palette */}
                            <div className="relative">
                                <label >요청하신 페이지를 찾을수 없습니다.</label>
                            </div>
                            {/* helpful shortcuts */}
                            <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                                <Chip>Home: /</Chip>
                                <Chip>Projects: /projects</Chip>
                                <Chip>Contact: /contact</Chip>
                                <Chip>검색: /search?q=키워드</Chip>
                            </div>

                            {/* code sample with glitch caret */}
                            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 p-4 font-mono text-[13px] text-neutral-800 dark:text-neutral-100 leading-relaxed">
                                <CodeLine n={1}>// 시스템이 요청한 경로를 찾지 못했습니다.</CodeLine>
                                <CodeLine n={2}>const path = "{missingPath}"</CodeLine>
                                <CodeLine n={3}>throw new NotFoundError(path)</CodeLine>
                                <CodeLine n={4}>{"suggestion = ['홈으로 이동', '검색 사용', '관리자에게 보고']"}</CodeLine>
                                <CodeLine n={5}>{"next = () => navigate('/') /* Enter 로 실행 */"}</CodeLine>
                                <Caret pulse={pulse} />
                            </div>

                            {/* actions */}
                            <div className="flex flex-wrap gap-3">
                                <button onClick={goHome} className="btn btn-solid">홈으로</button>
                                <button onClick={() => (window.location.href = "/projects")} className="btn btn-ghost">프로젝트 보기</button>
                                <button onClick={openMail} className="btn btn-ghost">오류 보고</button>
                                <button onClick={copyId} className="btn btn-ghost">{copied ? "복사됨" : "오류ID 복사"}</button>
                                <span className="ml-auto text-xs text-neutral-500">오류ID: {errorId}</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal / Log */}
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-black text-green-400 font-mono text-[13px] p-4 md:p-5 min-h-[320px] max-h-[520px] overflow-y-auto">
                        <div className="text-neutral-400 text-xs mb-2">[System Log]</div>
                        {log.map((line, i) => (
                            <div key={i} className="whitespace-pre-wrap">{`> ${line}`}</div>
                        ))}
                        {debug && (
                            <>
                                <div className="text-neutral-500 mt-3">[Debug]</div>
                                <div>{"> UA: " + (typeof navigator !== "undefined" ? navigator.userAgent : "-")}</div>
                                <div>{"> Time: " + new Date().toISOString()}</div>
                            </>
                        )}
                    </div>
                </div>

                {/* help links */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
                    <span className="opacity-70">Tip:</span>
                    <span>해당 페이지는 존재하지 않을 가능성이 높아요</span>
                </div>
            </section>
        </main>
    );
}

function Chip({ children }) {
    return (
        <span className="px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/60">{children}</span>
    );
}

function CodeLine({ n, children }) {
    return (
        <div className="grid grid-cols-[42px_1fr]">
            <span className="text-right pr-3 select-none text-neutral-400">{n}</span>
            <code>{children}</code>
        </div>
    );
}

function Caret({ pulse }) {
    return (
        <div className="mt-1 h-5">
            <span className={`inline-block w-2 h-4 align-middle bg-neutral-800 dark:bg-neutral-100 ${pulse ? "opacity-90" : "opacity-30"}`} />
        </div>
    );
}

function useKonami(handler) {
    const seq = useRef([]);
    useEffect(() => {
        const keys = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a",
        ];
        const onKey = (e) => {
            seq.current.push(e.key);
            if (seq.current.length > keys.length) seq.current.shift();
            if (keys.every((k, i) => seq.current[i] === k)) handler();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handler]);
}

/*
Tailwind helper classes used:
.btn { @apply inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 transition; }
.btn-solid { @apply bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90; }
.btn-outline { @apply bg-transparent; }
.btn-ghost { @apply border-transparent bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40; }
*/