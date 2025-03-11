"use client";

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
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold">MILENE BORGES</h1>
          <p className="mt-4 font-bold text-[#9D2235]-300">GESTORA</p>
          <p className="mt-4 text-300">
            Soy auxiliar administrativo en MAPFRE, apoyando en siniestros,
            pólizas y seguros de vida. Gestiono documentación, atiendo consultas
            y aseguro el cumplimiento de procesos. Me encargo del seguimiento de
            expedientes y actualización de datos, garantizando eficiencia y un
            servicio ágil para los clientes.
          </p>
        </div>

        {/* Imagem na direita com animação */}
        <div
          className={`flex-1 flex justify-center mt-6 md:mt-0 transition-all duration-1000 ${
            showImage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
          }`}
        >
          <Image
            src="/assets/millers.png"
            alt="Milene Besen"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
