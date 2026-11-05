
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingContact() {
  const phoneNumber = '919773034833';

  const buttonVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.7 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 14,
      },
    },
  };

  return (
    <div className="floating-contact fixed bottom-7 right-5 z-[9999] flex flex-col items-end gap-4">

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          'Hello Cosmovance Technologies, I want to discuss a project.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.08, x: -5 }}
        whileTap={{ scale: 0.93 }}
        className="group relative flex items-center gap-3"
      >
        <span className="rounded-full bg-[#102B20] border border-[#25D366]/30 px-4 py-2 text-sm font-semibold text-white shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Chat on WhatsApp
        </span>

        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] ring-4 ring-[#25D366]/15">
          <FaWhatsapp size={31} />
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:+${phoneNumber}`}
        aria-label="Call Cosmovance Technologies"
        title="Call Now"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.08, x: -5 }}
        whileTap={{ scale: 0.93 }}
        transition={{ delay: 0.15 }}
        className="group relative flex items-center gap-3"
      >
        <span className="rounded-full bg-[#172747] border border-blue-400/30 px-4 py-2 text-sm font-semibold text-white shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Call Now
        </span>

        <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white shadow-[0_8px_30px_rgba(59,130,246,0.4)] ring-4 ring-blue-500/15">
          <Phone size={25} strokeWidth={2.5} className="animate-[wiggle_2s_ease-in-out_infinite]" />
        </span>
      </motion.a>

    </div>
  );
}
