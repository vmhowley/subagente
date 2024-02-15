import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

function Home () {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
    <Hero/>
    </motion.div>
    </>
  )
}

export default Home