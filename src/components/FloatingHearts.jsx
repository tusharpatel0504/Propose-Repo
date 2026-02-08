import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Cherry blossom focused emojis
    const emojis = ['🌸']; 
    const interval = setInterval(() => {
      setHearts((current) => {
        const id = Math.random();
        const newHeart = {
          id,
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 5 + 5 + "s", // Slow falling rain
          opacity: Math.random() * 0.5 + 0.3, // Soft opacity
          scale: Math.random() * 0.5 + 0.5,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        };
        
        // Keep array size manageable but enough for rain effect
        const updated = [...current, newHeart];
        if (updated.length > 150) updated.shift();
        return updated;
      });
    }, 100); // Frequent drops for rain effect
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-0 animate-fall"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            opacity: heart.opacity,
            fontSize: `${heart.scale * 1.5}rem`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
