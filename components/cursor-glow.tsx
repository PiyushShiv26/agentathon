"use client"

import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2

      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      }

      // Animate trails
      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          const delay = (index + 1) * 0.05
          const targetX = cursorX + (mouseX - cursorX) * delay
          const targetY = cursorY + (mouseY - cursorY) * delay
          
          trail.style.transform = `translate(${targetX}px, ${targetY}px)`
        }
      })

      requestAnimationFrame(animateCursor)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const animationId = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange-500/30 via-orange-600/10 to-transparent blur-xl" />
          {/* Middle glow */}
          <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-orange-400/50 via-orange-500/20 to-transparent blur-md" />
          {/* Inner dot */}
          <div className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400" />
        </div>
      </div>

      {/* Trailing particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el
          }}
          className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-screen"
          style={{ 
            transform: "translate(-50%, -50%)",
            opacity: 1 - (i * 0.15)
          }}
        >
          <div
            className="w-4 h-4 rounded-full bg-gradient-radial from-orange-400/60 to-transparent blur-sm"
            style={{
              transform: `scale(${1 - i * 0.15})`,
            }}
          />
        </div>
      ))}
    </>
  )
}
