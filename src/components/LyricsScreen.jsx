```jsx
"use client"

export const dynamic = "force-static"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const lyrics = [
  {
    main: "तेरा होने",
    small: "लगा हूं",
    duration: 3200,
  },
  {
    main: "खोने",
    small: "लगा हूं",
    duration: 3500,
  },
  {
    main: "जब से",
    small: "मिला हूं",
    duration: 3800,
  },
  {
    main: "तेरा होने",
    small: "लगा हूं",
    duration: 4000,
  },
  {
    main: "खोने",
    small: "लगा हूं",
    duration: 4200,
  },
  {
    main: "जब से",
    small: "मिला हूं",
    duration: 4400,
  },
]

export default function LyricsScreen({ onComplete }) {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0)

  useEffect(() => {
    const currentDuration =
      lyrics[currentLyricIndex].duration

    const timer = setTimeout(() => {
      if (currentLyricIndex < lyrics.length - 1) {
        setCurrentLyricIndex((prev) => prev + 1)
      } else {
        onComplete?.()
      }
    }, currentDuration)

    return () => clearTimeout(timer)
  }, [currentLyricIndex, onComplete])

  const lyric = lyrics[currentLyricIndex]

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentLyricIndex}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -18,
            scale: 0.95,
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="text-center px-6"
        >

          {/* MAIN LYRIC */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
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
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]
            "
          >
            {lyric.main}
          </motion.div>

          {/* SMALL LYRIC */}
          {lyric.small && (
            <motion.div
              initial={{
                opacity: 0,
                y: -5,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                text-white
                font-semibold
                text-xl
                sm:text-2xl
                md:text-3xl
                mt-2
                leading-none
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
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
```
