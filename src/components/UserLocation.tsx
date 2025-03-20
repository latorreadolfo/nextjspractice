"use client";
import { useEffect, useState } from "react";

interface LocationData {
  city: string;
  country: string;
  countryCode: string;
  ip: string;
  timezone: string;
  localTime: string;
}

const UserLocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Error al obtener la ubicación");

        const data = await response.json();

        // Obtendo a hora local com base no fuso horário
        const localTime = new Date().toLocaleString("es-ES", {
          timeZone: data.timezone,
        });

        setLocation({
          city: data.city,
          country: data.country_name,
          countryCode: data.country_code,
          ip: data.ip,
          timezone: data.timezone,
          localTime,
        });
      } catch (err) {
        setError("No fue posible obtener su ubicación.");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : location ? (
        <div className="text-center">
          {/* Bandeira do país */}
          <img
            src={`https://flagsapi.com/${location.countryCode}/flat/64.png`}
            alt={`Bandera de ${location.country}`}
            className="mb-2 mx-auto block"
          />

          {/* Informações de localização */}
          <p>
            🌍 Estás accediendo desde{" "}
            <strong>
              {location.city}, {location.country}
            </strong>
          </p>
          <p>
            📍 Dirección IP: <strong>{location.ip}</strong>
          </p>
          <p>
            ⏳ Zona horaria: <strong>{location.timezone}</strong>
          </p>
          <p>
            🕒 Hora local: <strong>{location.localTime}</strong>
          </p>
        </div>
      ) : (
        <p>🔄 Obteniendo su ubicación...</p>
      )}
    </div>
  );
};

export default UserLocation;
