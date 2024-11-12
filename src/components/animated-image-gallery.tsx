'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "~/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"
import { motion, AnimatePresence } from 'framer-motion'

// Sample image data - replace with your actual image data
const images = [
  { id: 1, src: '/placeholder.svg?height=300&width=300', alt: 'Image 1' },
  { id: 2, src: '/placeholder.svg?height=300&width=300', alt: 'Image 2' },
  { id: 3, src: '/placeholder.svg?height=300&width=300', alt: 'Image 3' },
  { id: 4, src: '/placeholder.svg?height=300&width=300', alt: 'Image 4' },
  { id: 5, src: '/placeholder.svg?height=300&width=300', alt: 'Image 5' },
  { id: 6, src: '/placeholder.svg?height=300&width=300', alt: 'Image 6' },
]

export function AnimatedImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredImage, setHoveredImage] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Animated Image Gallery
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 1 }}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
            onMouseEnter={() => setHoveredImage(image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
            />
            <AnimatePresence>
              {hoveredImage === image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={450}
                    height={450}
                    className="object-contain max-w-[150%] max-h-[150%]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <Carousel>
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center p-2"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="object-contain max-h-[80vh]"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  )
}