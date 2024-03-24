"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
// import arrowImg from "@/assets/Banner/Group 10.png"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-[10px] w-full grow overflow-hidden rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]">
      <SliderPrimitive.Range className="absolute h-full bg-transparent" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-8 w-8 rounded-full bg-[#48aa8d] ring-offset-background transition-colors focus-visible:outline-none  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-5">
      {/* <img src={arrowImg} alt="Image" /> */}
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
