"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Dialog, DialogContent } from "~/components/ui/dialog";

// Sample image data - replace with your actual image data
const images = [
  { id: 1, src: "/photo1.jpg", alt: "Image 1" },
  { id: 2, src: "/photo1.jpg", alt: "Image 2" },
  { id: 3, src: "/photo1.jpg", alt: "Image 3" },
  { id: 4, src: "/photo1.jpg", alt: "Image 4" },
  { id: 5, src: "/photo1.jpg", alt: "Image 5" },
  { id: 6, src: "/photo1.jpg", alt: "Image 6" },
];

interface ImageType {
  id: number;
  src: string;
  alt: string;
}

export function AnimatedImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [hoveredImage, setHoveredImage] = useState<ImageType | null>(null);

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-3xl font-bold"
      >
        Memorable pics
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 1 }}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
            onMouseEnter={() => setHoveredImage(image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
            />
            <AnimatePresence>
              {hoveredImage === image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={450}
                    height={450}
                    className="max-h-[150%] max-w-[150%] object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
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
                      className="max-h-[80vh] object-contain"
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
  );
}
