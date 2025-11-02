"use client"

import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const words = text.split(" ")

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <span
              className={`inline-block transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
