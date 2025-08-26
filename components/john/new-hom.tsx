
// "use client"

// import { useRef, useEffect, useState } from "react"
// import { Users } from "lucide-react"
// import { registerVisit, getVisitCount } from "@/actions/visitor-count"

// export default function UnderDevelopmentPage() {
//   const video1Ref = useRef<HTMLVideoElement>(null)
//   const video2Ref = useRef<HTMLVideoElement>(null)
//   const [visitCount, setVisitCount] = useState(0)
//   const [isClient, setIsClient] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     setIsClient(true)

//     const trackVisit = async () => {
//       try {
//         setIsLoading(true)
        
//         // Always register a visit and get the updated count
//         const count = await registerVisit()
//         if (count !== null && count !== undefined) {
//           setVisitCount(count)
//         } else {
//           // Fallback: just get the current count
//           const currentCount = await getVisitCount()
//           if (currentCount !== null && currentCount !== undefined) {
//             setVisitCount(currentCount)
//           }
//         }
//       } catch (error) {
//         console.error("Error tracking visit:", error)
//         // Even if there's an error, try to get the count
//         try {
//           const currentCount = await getVisitCount()
//           if (currentCount !== null && currentCount !== undefined) {
//             setVisitCount(currentCount)
//           }
//         } catch (fallbackError) {
//           console.error("Fallback error:", fallbackError)
//         }
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     trackVisit()
//   }, [])

//   useEffect(() => {
//     const video1 = video1Ref.current
//     const video2 = video2Ref.current

//     if (video1 && video2) {
//       const handleVideo1End = () => {
//         video2.play()
//       }

//       video1.addEventListener("ended", handleVideo1End)
//       return () => video1.removeEventListener("ended", handleVideo1End)
//     }
//   }, [])

//   const handlePlaySequence = () => {
//     if (video1Ref.current && video2Ref.current) {
//       video2Ref.current.currentTime = 0
//       video1Ref.current.currentTime = 0
//       video1Ref.current.play()
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-900 to-yellow-400 flex flex-col items-center justify-center p-4">
//       {/* Visit Counter */}
//       {isClient && (
//         <div className="absolute top-16 md:top-24 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
//           <div className="flex items-center space-x-2">
//             <Users size={20} />
//             <span className="font-semibold">
//               {isLoading ? "Loading..." : `Visits: ${visitCount.toLocaleString()}`}
//             </span>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Website Under Development</h1>
//         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
//           Bridging to a brighter future through Intercultural & Intergenerational Harmony
//         </p>
//       </div>

//       {/* Video Component */}
//       <div className="relative w-full max-w-4xl mx-auto">
//         <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
//           <video
//             ref={video1Ref}
//             className="w-full h-auto"
//             controls
//             preload="metadata"
//             poster="/placeholder.svg?height=400&width=800"
//           >
//             <source src="/john/KB.mkv" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <video
//             ref={video2Ref}
//             className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500"
//             controls
//             preload="metadata"
//             poster="/placeholder.svg?height=400&width=800"
//             onPlay={() => {
//               if (video2Ref.current) video2Ref.current.style.opacity = "1"
//               if (video1Ref.current) video1Ref.current.style.opacity = "0"
//             }}
//             onEnded={() => {
//               if (video2Ref.current) video2Ref.current.style.opacity = "0"
//               if (video1Ref.current) video1Ref.current.style.opacity = "1"
//             }}
//           >
//             <source src="/john/KB.mkv" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handlePlaySequence}
//             className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
//           >
//             Play Video Sequence
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center space-x-2 text-gray-400">
//           <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
//           <span className="text-sm">Coming Soon</span>
//           <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useRef, useEffect, useState } from "react"
import { Users } from "lucide-react"
import { registerVisit, getVisitCount } from "@/actions/visitor-count"

export default function UnderDevelopmentPage() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [visitCount, setVisitCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsClient(true)

    const trackVisit = async () => {
      try {
        setIsLoading(true)
        
        // Check if this is a fresh visit (not a refresh or navigation)
        const isNewVisit = !sessionStorage.getItem('visitRegistered')
        
        if (isNewVisit) {
          // This is a new visit - register it
          const count = await registerVisit()
          if (count !== null && count !== undefined) {
            setVisitCount(count)
            // Mark this session as having registered a visit
            sessionStorage.setItem('visitRegistered', 'true')
          }
        } else {
          // This is a refresh or navigation - just get the current count
          const currentCount = await getVisitCount()
          if (currentCount !== null && currentCount !== undefined) {
            setVisitCount(currentCount)
          }
        }
      } catch (error) {
        console.error("Error tracking visit:", error)
        // Even if there's an error, try to get the count
        try {
          const currentCount = await getVisitCount()
          if (currentCount !== null && currentCount !== undefined) {
            setVisitCount(currentCount)
          }
        } catch (fallbackError) {
          console.error("Fallback error:", fallbackError)
        }
      } finally {
        setIsLoading(false)
      }
    }

    trackVisit()
  }, [])

  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current

    if (video1 && video2) {
      const handleVideo1End = () => {
        video2.play()
      }

      video1.addEventListener("ended", handleVideo1End)
      return () => video1.removeEventListener("ended", handleVideo1End)
    }
  }, [])

  const handlePlaySequence = () => {
    if (video1Ref.current && video2Ref.current) {
      video2Ref.current.currentTime = 0
      video1Ref.current.currentTime = 0
      video1Ref.current.play()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-900 to-yellow-400 flex flex-col items-center justify-center p-4">
      {/* Visit Counter */}
      {isClient && (
        <div className="absolute top-16 md:top-24 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
          <div className="flex items-center space-x-2">
            <Users size={20} />
            <span className="font-semibold">
              {isLoading ? "Loading..." : `Visits: ${visitCount.toLocaleString()}`}
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Website Under Development</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Bridging to a brighter future through Intercultural & Intergenerational Harmony
        </p>
      </div>

      {/* Video Component */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <video
            ref={video1Ref}
            className="w-full h-auto"
            controls
            preload="metadata"
            poster="/placeholder.svg?height=400&width=800"
          >
            <source src="/john/KB.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            ref={video2Ref}
            className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500"
            controls
            preload="metadata"
            poster="/placeholder.svg?height=400&width=800"
            onPlay={() => {
              if (video2Ref.current) video2Ref.current.style.opacity = "1"
              if (video1Ref.current) video1Ref.current.style.opacity = "0"
            }}
            onEnded={() => {
              if (video2Ref.current) video2Ref.current.style.opacity = "0"
              if (video1Ref.current) video1Ref.current.style.opacity = "1"
            }}
          >
            <source src="/john/KB.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlaySequence}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Play Video Sequence
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-sm">Coming Soon</span>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
        </div>
      </div>
    </div>
  )
}