import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

const ROTATION_RANGE = 10;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });

  const transform = useMotionTemplate`
    perspective(800px)
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = (mouseX / width - 0.5) * ROTATION_RANGE;
    const rotateX = (0.5 - mouseY / height) * ROTATION_RANGE;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </div>
    </motion.div>
  );
}