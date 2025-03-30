'use client';

import { motion } from 'framer-motion';

export default function LoudSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-6 py-16 space-y-12">
      <h1 className="text-5xl font-bold leading-tight">Balancing <br /> creativity & strategy</h1>
      <p className="text-lg text-gray-600">From concept to launch, we're committed to your success.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full">
        <div className="bg-yellow-400 py-6 flex flex-col items-start">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src="/hand.png" alt="Hands" className="mb-4" />
          </motion.div>
          <h3 className="font-bold text-xl px-4">Transparency & Flexibility</h3>
          <p className="text-gray-700 text-sm mt-2 px-4 justify-start text-start">
            We believe in working closely with our clients, offering transparent solutions and building trust in order to unlock strategic opportunities.
          </p>
        </div>
        
        <div className="bg-gray-100 p-6 text-left">
          <h3 className="font-bold text-xl">BSCP is our formula for building successful and LOUD brands</h3>
          <p className="text-gray-700 text-sm mt-2">
            Branding, Storytelling, Content and Performance (BSCP) is how we combine strategic thinking and creativity to create lasting impact and drive growth.
          </p>
        </div>
        
        <div className="bg-black text-white p-6 text-left">
          <h3 className="text-sm uppercase text-gray-400">Create, Share, Sell</h3>
          <h3 className="font-bold text-xl mt-2">Social Media & E-commerce</h3>
          <p className="text-gray-400 text-sm mt-2">
            We support you creatively and strategically throughout the <span className="text-white font-semibold">communication</span> process, and then drive sales on your <span className="text-white font-semibold">E-commerce</span> platform through performance campaigns.
          </p>
        </div>
        
        <div className="bg-yellow-400 pt-44 p-8 relative flex flex-col items-center text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="absolute inset-0 flex justify-center items-center">
            <img src="/phone-mockup.png" alt="Phone" className="w-full h-full object-cover" />
          </motion.div>
          <div className="relative z-10">
            <h3 className="font-bold text-xl">2025</h3>
            <p className="bg-white text-black text-sm p-2 rounded mt-2">
              <strong>10 years of expertise</strong><br /> We are proud to be celebrating a decade of delivering impactful marketing results for brands worldwide.
            </p>
            <h3 className="font-bold text-2xl mt-2">LOUD®</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
