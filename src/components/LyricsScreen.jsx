"use client"

import { useEffect, useRef } from "react"

export const dynamic = "force-static"

export default function LyricsScreen({ onComplete }) {
const videoRef = useRef(null)

useEffect(() => {
    const video = videoRef.current

    if (!video) return

    video.play().catch((error) => {
        console.log("Video autoplay blocked:", error)
    })

    const handleEnded = () => {
        if (onComplete) {
            onComplete()
        }
    }

    video.addEventListener("ended", handleEnded)

    return () => {
        video.removeEventListener("ended", handleEnded)
    }
}, [onComplete])

return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <video
            ref={videoRef}
            src="/video/vd.mp4"
            autoPlay
            playsInline
            controls={false}
            className="w-full h-full object-contain"
        />
    </div>
)
}