import { useState, useEffect, useRef } from "react";
import { links } from "../constants/links";
import heroImg from '../assets/img/hero-img.png'

const ballCount = 3; 
function rand(min, max) {
   return Math.random() * (max - min) + min;
}

 // bell colour gradient
function randomSoftGradient(baseHue = null, offset = 0) {
   const hue = baseHue !== null ? (baseHue + offset) % 360 : Math.floor(rand(0, 360));
   const hue2 = (hue + Math.floor(rand(30, 80))) % 360;
   const c1 = `hsla(${hue}, 70%, 60%, 0.70)`;
   const c2 = `hsla(${hue2}, 70%, 60%, 0.88)`;

   return `linear-gradient(135deg, ${c1}, ${c2})`;
}

function Hero() {
   const containerRef = useRef(null);
   const [balls, setBalls] = useState([]);
   const [mouse, setMouse] = useState({ x: 0, y: 0 });
   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  // initialize balls positions and speed
  useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const baseHue = Math.floor(rand(0, 360)); // initial base hue
      const offsets = Array.from({ length: ballCount }).map((_, i) => i * (360 / ballCount));
      
      const newBalls = Array.from({ length: ballCount }).map((_, i) => {
         const size = Math.floor(rand(60, 160)); // ball size
         const initialHue = (baseHue + offsets[i]) % 360;
         return {
            id: Math.random().toString(36).slice(2, 9),
            size,
            x: rand(0, Math.max(0, container.offsetWidth - size)),
            y: rand(0, Math.max(0, container.offsetHeight - size)),
            vx: rand(-0.6, 0.6), // speed
            vy: rand(-0.6, 0.6),
            hue: initialHue, 
            color: randomSoftGradient(baseHue, offsets[i]), // colour individually
         };
      });
      setBalls(newBalls);
   }, []);

  // mouse position
  useEffect(() => {
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // animation loop
  useEffect(() => {
   const container = containerRef.current;
   if (!container) return;
   let animationFrame;

   const animate = () => {
      setBalls((prevBalls) => {
         let newBalls = prevBalls.map((ball) => {
            let { x, y, vx, vy, size, hue } = ball;

            // movement
            x += vx;
            y += vy;

            // edge collision
            if (x <= 0) { 
               x = 0; vx = Math.abs(vx); 
            }
            if (x + size >= container.offsetWidth) { 
               x = container.offsetWidth - size; vx = -Math.abs(vx); 
            }
            if (y <= 0) { 
               y = 0; vy = Math.abs(vy); 
            }
            if (y + size >= container.offsetHeight) { 
               y = container.offsetHeight - size; vy = -Math.abs(vy); 
            }
            

            // mouse repulsion
            const mx = mouse.x - (container.offsetLeft || 0);
            const my = mouse.y - (container.offsetTop || 0);
            const dx = x + size / 2 - mx;
            const dy = y + size / 2 - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = size / 2 + 50;
            if (dist < minDist) {
               const angle = Math.atan2(dy, dx);
               let force = (minDist - dist) * 0.001 * 0.6;
               if (force > 0.2) force = 0.2; // max force cap
               vx += Math.cos(angle) * force;
               vy += Math.sin(angle) * force;
            }

            // slight random motion
            vx += (Math.random() - 0.5) * 0.02;
            vy += (Math.random() - 0.5) * 0.02;

            // speed limit for smoothness
            const maxSpeed = 2;
            vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
            vy = Math.max(-maxSpeed, Math.min(maxSpeed, vy));

            // ramdom colour shift
            const colorHueShift = 0.5; 
            const newHue = (hue + colorHueShift) % 360;
            hue = newHue;
            const hue2 = (newHue + Math.floor(rand(30, 80))) % 360;
            const color = `linear-gradient(135deg, hsla(${newHue},70%,60%,0.7), hsla(${hue2},70%,60%,0.88))`;


            return { ...ball, x, y, vx, vy, hue: newHue, color };
         });
         
          // ball-to-ball collision
         for (let i = 0; i < newBalls.length; i++) {
            for (let j = i + 1; j < newBalls.length; j++) {
               let b1 = newBalls[i];
               let b2 = newBalls[j];

               const dx = (b1.x + b1.size / 2) - (b2.x + b2.size / 2);
               const dy = (b1.y + b1.size / 2) - (b2.y + b2.size / 2);
               const dist = Math.sqrt(dx * dx + dy * dy);
               const minDist = (b1.size + b2.size) / 2;

               if (dist < minDist) {
                  // direction angle
                  const angle = Math.atan2(dy, dx);
                  const overlap = (minDist - dist) / 2;

                  // balls repositioning
                  b1.x += Math.cos(angle) * overlap;
                  b1.y += Math.sin(angle) * overlap;
                  b2.x -= Math.cos(angle) * overlap;
                  b2.y -= Math.sin(angle) * overlap;

                  // reduce velocity upon collision
                  const swapVx = b1.vx;
                  const swapVy = b1.vy;
                  b1.vx = b2.vx * 0.6;
                  b1.vy = b2.vy * 0.6;
                  b2.vx = swapVx * 0.6;
                  b2.vy = swapVy * 0.6;
               }
            }
         }
         return [...newBalls];
      });

      animationFrame = requestAnimationFrame(animate);
   };

   animate();
   return () => cancelAnimationFrame(animationFrame);
}, [mouse]);

   // responsive ball size
   const getBallSize = (size) => {
      const minWidth = 320;
      const maxWidth = 1440;
      const minScale = 0.4; // minimum scaling factor
      const maxScale = 1;   // maximum scaling factor
    
      const scale = Math.min(
        maxScale,
        Math.max(minScale, (windowWidth - minWidth) / (maxWidth - minWidth))
      );
    
      return size * scale;
    };

   return (
      <section
         className="hero"
         ref={containerRef}
         style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "flex-start", 
         flexDirection: "column",
         width: "100%",
         minHeight: "100vh",
         overflow: "hidden",
         backgroundColor: "#FAFAFA",
         }}
      >
      <div
         className="hero-text"
         style={{ 
            width: "90%",           
            margin: "0 auto",       
            textAlign: "center",
            paddingTop: "150px",
            zIndex: 10,
            position: "relative"
         }}
      >
         <div className="hero-visual-wrapper">
            <img 
               src= {heroImg} 
               alt="Main Visual" 
               className="hero-main-visual"
            />
         </div>
         <h1 className="hero-headline">
            Think as a problem-solver, build as an engineer.
         </h1>
         <p className="hero-tagline">
            I build <span class="highlight">full-stack</span> applications and design <span class="highlight">user-centred</span> solutions to
            turn ideas into impactful software.
         </p>
         <div className="hero-cta">
            <a href="#projects" className="btn-primary">
               View Projects
            </a>
            <a href={links.resume} className="btn-secondary" target="_blank" rel="noopener noreferrer">
               Resume
            </a>
         </div>
         </div>

         {balls.map((ball, i) => (
         <div
            key={i}
            className="abstract-shape"
            style={{
               width: getBallSize(ball.size),
               height: getBallSize(ball.size),
               left: ball.x,
               top: ball.y,
               position: "absolute",
               borderRadius: "50%",
               background: ball.color,
               opacity: 0.3,
               zIndex: 1,
               animation: "none",
            }}
         ></div>
         ))}
      </section>
   );
   }

   export default Hero;
