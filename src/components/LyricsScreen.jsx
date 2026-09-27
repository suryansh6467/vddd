"use client"

export const dynamic = "force-static"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const lyrics = [
  {
    main: "तेरा होने",
    small: "लगा हूं",
    duration: 4800,
  },
  {
    main: "तेरा होने लगा",
    small: "हूं",
    duration: 4800,
  },
  {
    main: "खोने लगा",
    small: "हूं",
    duration: 4800,
  },
  {
    main: "खोने लगा हूं,",
    small: "जब",
    duration: 4800,
  },
  {
    main: "खोने लगा हूं,",
    small: "जब से मिला हूं",
    duration: 4800,
  },
  {
    main: "तेरा होने लगा हूं",
    small: "",
    duration: 4800,
  },
]

export default function LyricsScreen({ onComplete }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current < lyrics.length - 1) {
        setCurrent((prev) => prev + 1)
      } else {
        onComplete?.()
      }
    }, lyrics[current].duration)

    return () => clearTimeout(timer)
  }, [current, onComplete])

  const lyric = lyrics[current]

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.96,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="text-center px-6"
        >
          {/* MAIN LYRIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-white
              font-bold
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              leading-none
              tracking-tight
              drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]
            "
          >
            {lyric.main}
          </motion.div>

          {/* SMALL CONTINUATION */}
          {lyric.small && (
            <motion.div
              initial={{
                opacity: 0,
                y: -3,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.45,
              }}
              className="
                text-white
                font-semibold
                text-lg
                sm:text-xl
                md:text-2xl
                mt-1
                leading-none
              "
            >
              {lyric.small}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
