"use client";

import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Ativa a animação após o carregamento da página
    setTimeout(() => setShowImage(true), 100);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-[#4D4D4D] p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">MILENE BORGES</h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">GESTORA</p>
          <p className="mt-4 text-300">
            Soy auxiliar administrativo en MAPFRE, apoyando en siniestros,
            pólizas y seguros de vida. Gestiono documentación, atiendo consultas
            y aseguro el cumplimiento de procesos. Me encargo del seguimiento de
            expedientes y actualización de datos, garantizando eficiencia y un
            servicio ágil para los clientes.
          </p>
        </div>

        <AnimatedImage src="/assets/millers.png" />
      </div>
    </div>
  );
};

export default HomePage;
