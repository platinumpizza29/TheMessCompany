'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export function EnhancedSponsorPageComponent() {
  const sponsors = [
    {
      name: "TechCorp",
      description: "Leading innovators in AI and machine learning, supporting cutting-edge research and development.",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "GreenEnergy Co.",
      description: "Pioneers in sustainable energy solutions, funding eco-friendly initiatives worldwide.",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "GlobalEdu Foundation",
      description: "Dedicated to improving access to quality education in underserved communities globally.",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "HealthTech Innovations",
      description: "Revolutionizing healthcare through advanced medical technologies and research funding.",
      logo: "/placeholder.svg?height=80&width=80"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Valued Sponsors</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            We are profoundly grateful for the unwavering support of our sponsors who make our work possible. Their commitment to innovation, sustainability, and social impact perfectly aligns with our mission to create a better future for all.
          </p>
        </div>
        <motion.div 
          className="mb-16 overflow-hidden rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Our sponsors at the annual gala"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
          />
          <p className="mt-2 text-sm text-gray-500 text-center italic">Our esteemed sponsors at the annual gala</p>
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Sponsors</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-24 w-24 rounded-full object-cover"
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={96}
                      height={96}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{sponsor.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{sponsor.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-400">
            Interested in becoming a sponsor? <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">Contact us</a> to learn more about partnership opportunities.
          </p>
        </div>
      </footer>
    </div>
  )
}