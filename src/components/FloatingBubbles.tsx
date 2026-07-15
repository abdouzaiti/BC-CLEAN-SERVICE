import { motion } from 'motion/react';
import { useMemo } from 'react';

export const FloatingBubbles = () => {
  const bubbles = useMemo(() => 
    Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      opacity: Math.random() * 0.1 + 0.05,
      scale: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Glows - Extremely minimal */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-blue/[0.03] blur-[150px] rounded-full"></div>
      
      {/* Animated Particles - Simplified */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ x: `${bubble.x}%`, y: '110%', opacity: 0 }}
          animate={{ y: '-10%', opacity: bubble.opacity }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay
          }}
          className="absolute w-2 h-2 bg-dark-navy/10 rounded-full"
          style={{ willChange: 'transform', scale: bubble.scale }}
        />
      ))}
    </div>
  );
};
