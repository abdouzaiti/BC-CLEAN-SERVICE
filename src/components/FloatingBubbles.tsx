import { motion } from 'motion/react';

export const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-blue/10 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-light-blue/5 blur-[120px] rounded-full animate-pulse-slow"></div>
      
      {/* Star Particles */}
      <div className="absolute top-[20%] left-[30%] w-[3px] h-[3px] bg-white rounded-full opacity-40 shadow-[0_0_10px_white]"></div>
      <div className="absolute top-[60%] left-[10%] w-[2px] h-[2px] bg-white rounded-full opacity-20 shadow-[0_0_8px_white]"></div>
      <div className="absolute top-[15%] left-[85%] w-[2px] h-[2px] bg-white rounded-full opacity-30 shadow-[0_0_8px_white]"></div>
      <div className="absolute bottom-[25%] right-[15%] w-[3px] h-[3px] bg-white rounded-full opacity-40 shadow-[0_0_10px_white]"></div>
      
      {/* Animated Bubbles */}
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: '110%', 
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: '-10%',
            x: (Math.random() * 100) + (Math.sin(i) * 10) + '%'
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute w-4 h-4 rounded-full glass border-white/20 blur-[1px]"
        />
      ))}
      
      {/* Subtle Particles */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};
