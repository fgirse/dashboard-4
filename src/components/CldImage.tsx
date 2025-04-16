"use client"

import Image from "next/image"
import { useState } from "react"

interface CloudinaryImageProps {
  src: string
  alt: string
  width: number
  height: number
  text?: string
  textColor?: string
  textSize?: number
  fontFamily?: string
  textPosition?:
    | "north"
    | "south"
    | "east"
    | "west"
    | "north_east"
    | "north_west"
    | "south_east"
    | "south_west"
    | "center"
  textBackground?: string
  className?: string
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  text,
  textColor, 
  textSize ,
  textPosition ,
  textBackground ,
  className ,
  ...props
}: CloudinaryImageProps) {
  const [isLoading, setLoading] = useState(true)

  // Convert hex color to RGB for Cloudinary
  const hexToRgb = (hex: string) => {
    // Remove # if present
    hex = hex.replace("#", "")

    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("")
    }

    // Parse the hex values
    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    return `rgb:${r.toString(16).padStart(2, "0")}_${g.toString(16).padStart(2, "0")}_${b.toString(16).padStart(2, "0")}`
  }

  // Build Cloudinary URL with transformations
  const buildCloudinaryUrl = () => {
    // Base URL (replace with your Cloudinary cloud name)
    const cloudName = "Carlo2024"
    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`

    // Transformations array
    const transformations = []

    // Add text overlay if provided
    if (text) {
      let textOverlay = `l_text:Arial_${textSize}`

      // Add text color if provided
      if (textColor) {
        textOverlay += `:${textColor.startsWith("#") ? hexToRgb(textColor) : textColor}`
      }

      // Add text content (URL encoded)
      textOverlay += `:${encodeURIComponent(text)}`

      // Add text position
      textOverlay += `,g_${textPosition}`

      // Add text background if provided
      if (textBackground) {
        textOverlay += `,b_${textBackground.startsWith("#") ? hexToRgb(textBackground) : textBackground}`
      }

      transformations.push(textOverlay)
    }

    // Add width and quality transformations
    transformations.push(`w_${width}`)
    transformations.push("q_auto")
    transformations.push("f_auto")

    // Combine transformations and URL
    const transformationString = transformations.join(",")
    return `${baseUrl}/${transformationString}/${src}`
  }

  return (
    <div className={`relative overflow-hidden ${className || ""}`} style={{ width, height }}>
      <Image
        src={buildCloudinaryUrl() || "interiore21_gbvcg4"}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"}
          ${className || ""}
        `}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </div>
  )
}
















