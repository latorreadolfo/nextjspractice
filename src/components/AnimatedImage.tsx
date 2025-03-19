"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const AnimatedImage = ({ src, alt = "Imagem animada", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Opcional: se quiser que a animação reinicie ao rolar para fora
          }
        });
      },
      { threshold: 0.9 } // Define quando o elemento deve ser considerado visível (30% dele na tela)
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div ref={imageRef} className="relative flex justify-center">
      {/* Background estático com offset */}
      <div className="absolute top-[10px] left-[-10px] w-full h-full bg-[#BE0F0F] rounded-full"></div>

      {/* Imagem animada */}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className={clsx(
          "transition-transform duration-700 ease-out rounded-full",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
          className
        )}
      />
    </div>
  );
};

export default AnimatedImage;
