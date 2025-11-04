import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function SparkCursor() {
    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const dotX = useSpring(x, { stiffness: 1200, damping: 35 })
    const dotY = useSpring(y, { stiffness: 1200, damping: 35 })
    const ringX = useSpring(x, { stiffness: 180, damping: 25 })
    const ringY = useSpring(y, { stiffness: 180, damping: 25 })

    const [bursts, setBursts] = useState([])
    const [isDark, setIsDark] = useState(true)
    const trailRef = useRef([])

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'))
        }
        checkTheme()
        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
            document.body.style.setProperty('--mx', e.clientX + 'px')
            document.body.style.setProperty('--my', e.clientY + 'px')

            trailRef.current.push({
                x: e.clientX,
                y: e.clientY,
                id: crypto.randomUUID(),
                at: Date.now()
            })
            if (trailRef.current.length > 12) trailRef.current.shift()
        }
        const click = (e) => {
            setBursts((prev) => [
                ...prev.slice(-5),
                { x: e.clientX, y: e.clientY, id: crypto.randomUUID() },
            ])
        }
        window.addEventListener('mousemove', move)
        window.addEventListener('click', click)
        document.documentElement.classList.add('spark-cursor-enabled')
        return () => {
            window.removeEventListener('mousemove', move)
            window.removeEventListener('click', click)
            document.documentElement.classList.remove('spark-cursor-enabled')
        }
    }, [x, y])

    const colors = isDark
        ? {
            // 다크모드: 화이트 글로우
            spotlight1: 'rgba(255,255,255,0.15)',
            spotlight2: 'rgba(255,255,255,0.08)',
            trail: 'white',
            trailShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)',
            ring: 'rgba(255,255,255,0.6)',
            ringShadow: '0 0 20px rgba(255,255,255,0.4), inset 0 0 20px rgba(255,255,255,0.2)',
            dot: 'white',
            dotShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.6), 0 0 36px rgba(255,255,255,0.3)',
            burst: 'rgba(255,255,255,0.8)',
            burstShadow: '0 0 10px rgba(255,255,255,0.6)',
            spark: 'white',
            sparkShadow: '0 0 6px rgba(255,255,255,0.8)',
        }
        : {
            // 라이트모드: 블랙 글로우
            spotlight1: 'rgba(0,0,0,0.08)',
            spotlight2: 'rgba(0,0,0,0.04)',
            trail: 'black',
            trailShadow: '0 0 8px rgba(0,0,0,0.3), 0 0 16px rgba(0,0,0,0.15)',
            ring: 'rgba(0,0,0,0.5)',
            ringShadow: '0 0 20px rgba(0,0,0,0.2), inset 0 0 20px rgba(0,0,0,0.1)',
            dot: 'black',
            dotShadow: '0 0 12px rgba(0,0,0,0.4), 0 0 24px rgba(0,0,0,0.2), 0 0 36px rgba(0,0,0,0.1)',
            burst: 'rgba(0,0,0,0.7)',
            burstShadow: '0 0 10px rgba(0,0,0,0.3)',
            spark: 'black',
            sparkShadow: '0 0 6px rgba(0,0,0,0.3)',
        }

    return (
        <>
            {/* 강렬한 스포트라이트 */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-[5] opacity-100"
                style={{
                    background:
                        `radial-gradient(500px 500px at var(--mx,50%) var(--my,50%), ${colors.spotlight1}, transparent 65%)`,
                    mixBlendMode: isDark ? 'screen' : 'multiply',
                }}
            />

            {/* 글로우 레이어 */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-[6]"
                style={{
                    background:
                        `radial-gradient(300px 300px at var(--mx,50%) var(--my,50%), ${colors.spotlight2}, transparent 50%)`,
                    filter: 'blur(40px)',
                }}
            />

            {/* 다이나믹 트레일 스파크 */}
            {trailRef.current.map((t, i) => {
                const age = Date.now() - t.at
                const opacity = Math.max(0, 1 - age / 400)
                const size = 2 + (trailRef.current.length - i) * 0.3

                return (
                    <motion.div
                        key={t.id}
                        className="pointer-events-none fixed z-[10000] rounded-full"
                        style={{
                            left: t.x,
                            top: t.y,
                            translateX: '-50%',
                            translateY: '-50%',
                            width: size,
                            height: size,
                            background: colors.trail,
                            boxShadow: colors.trailShadow,
                        }}
                        initial={{ opacity: 0.9, scale: 1.2 }}
                        animate={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                )
            })}

            {/* 폭발적 클릭 버스트 */}
            {bursts.map((b) => (
                <Burst key={b.id} x={b.x} y={b.y} colors={colors} />
            ))}

            {/* 이너 글로우 링 */}
            <motion.div
                className="pointer-events-none fixed z-[10001] rounded-full"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 40,
                    height: 40,
                    border: `2px solid ${colors.ring}`,
                    boxShadow: colors.ringShadow,
                }}
            />

            {/* 코어 점 with 강렬한 글로우 */}
            <motion.div
                className="pointer-events-none fixed z-[10002] rounded-full"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 8,
                    height: 8,
                    background: colors.dot,
                    boxShadow: colors.dotShadow,
                }}
            />
        </>
    )
}

function Burst({ x, y, colors }) {
    return (
        <div className="pointer-events-none fixed z-[9999]" style={{ left: x, top: y }}>
            {/* 메인 폭발 웨이브 */}
            {[1, 2, 3, 4].map((i) => (
                <motion.span
                    key={i}
                    className="absolute block rounded-full"
                    style={{
                        width: 2,
                        height: 2,
                        left: -1,
                        top: -1,
                        border: `1.5px solid ${colors.burst}`,
                        boxShadow: colors.burstShadow,
                    }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 35 / i }}
                    transition={{
                        duration: 0.8 - i * 0.1,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: i * 0.05
                    }}
                />
            ))}
            {/* 스파크 파티클 */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const distance = 40 + Math.random() * 20
                return (
                    <motion.span
                        key={`spark-${i}`}
                        className="absolute block rounded-full"
                        style={{
                            width: 2,
                            height: 2,
                            left: -1,
                            top: -1,
                            background: colors.spark,
                            boxShadow: colors.sparkShadow,
                        }}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        animate={{
                            opacity: 0,
                            x: Math.cos(angle) * distance,
                            y: Math.sin(angle) * distance,
                            scale: 0.2
                        }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                )
            })}
        </div>
    )
}